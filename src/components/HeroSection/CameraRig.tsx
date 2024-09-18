import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export default function CameraRig() {
    const initialPosition = new Vector3(0, 2, 5);
    const rightPosition = new Vector3(2, 2, 5);
    const leftPosition = new Vector3(-2, 2, 5);
    const zoomPosition = new Vector3(0, 2, 3);
    const duration = 20;

    useFrame((state) => {
        const t = (state.clock.elapsedTime % duration) / duration;
        const phase = Math.floor(t * 4);
        
        const targetPosition = initialPosition.clone();
        const easeInOut = (p: number) => p * p * (3 - 2 * p)
        const progress = easeInOut((t * 4) % 1); 
        
        switch (phase) {
            case 0:
                targetPosition.lerpVectors(initialPosition, rightPosition, progress);
                break;
            case 1:
                targetPosition.lerpVectors(rightPosition, leftPosition, progress);
                break;
            case 2:
                targetPosition.lerpVectors(leftPosition, zoomPosition, progress);
                break;
            case 3:
                targetPosition.lerpVectors(zoomPosition, initialPosition, progress);
                break;
            default:
                break;
        }
        
        state.camera.position.copy(targetPosition);
        state.camera.lookAt(0, 0, 0);
    });

    return null;
}

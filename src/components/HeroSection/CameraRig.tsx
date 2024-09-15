import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export default function CameraRig() {
    const initialPosition = new Vector3(0, 2, 5); // Starting position
    const rightPosition = new Vector3(2, 2, 5); // Position to the right
    const leftPosition = new Vector3(-2, 2, 5); // Position to the left
    const zoomPosition = new Vector3(0, 2, 3); // Zoomed-in position
    const duration = 20; // Duration of one full cycle in seconds (increased for slower animation)

    useFrame((state) => {
        const t = (state.clock.elapsedTime % duration) / duration; // Time normalized to the duration
        const phase = Math.floor(t * 4); // Determine the current phase of the animation
        
        const targetPosition = initialPosition.clone();

        // Use smooth cubic easing for transitions
        const easeInOut = (p: number) => p * p * (3 - 2 * p); // Simple cubic easing function

        // Progress within the current phase
        const progress = easeInOut((t * 4) % 1); 
        
        switch (phase) {
            case 0: // Moving right
                targetPosition.lerpVectors(initialPosition, rightPosition, progress);
                break;
            case 1: // Moving left
                targetPosition.lerpVectors(rightPosition, leftPosition, progress);
                break;
            case 2: // Zooming in
                targetPosition.lerpVectors(leftPosition, zoomPosition, progress);
                break;
            case 3: // Returning to initial position
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

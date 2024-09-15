import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Lightformer, Float } from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'

export default function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }: { positions?: number[] }) {
    const group = useRef<THREE.Group>(null)
    useFrame((state, delta) => {
        if (group.current) {
            group.current.position.z += delta * 10
            if (group.current.position.z > 20) {
                group.current.position.z = -60
            }
        }
    })

    return (
        <>
            {/* Ceiling */}
            <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <group rotation={[0, 0.5, 0]}>
                <group ref={group}>
                    {positions.map((x, i) => (
                        <Lightformer key={i} form="circle" intensity={1} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
                    ))}
                </group>
            </group>
            {/* Sides */}
            <Lightformer intensity={4} color={"#252525"} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />

            {/* Accent (red) */}
            {/* Background */}
            <mesh scale={200}>
                <sphereGeometry args={[0.5, 0.5, 0.5]} />
                <LayerMaterial side={THREE.BackSide}>
                    <Color color="black" alpha={1} mode="normal" />
                    <Depth colorA="black" colorB="white" alpha={0.3} mode="normal" near={0} far={400} origin={[100, 100, 100]} />
                </LayerMaterial>
            </mesh>
        </>
    )
}

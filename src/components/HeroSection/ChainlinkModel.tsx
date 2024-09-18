"use client";

// Essentials: 
import React, { useRef, useEffect } from 'react';

// 3RDrei & R3JS: 
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { type Group, type Mesh, type Material, type AnimationClip, AnimationAction, LoopRepeat } from 'three';

// R3F : 
import { useThree, useFrame } from '@react-three/fiber';

interface GLTFResult {
    nodes: {
        Curve?: Mesh;  // Curve is expected to be a Mesh object, adjust this if needed
    };
    materials: Record<string, Material>;
}

export default function ChainlinkModel() {
    // Loading GLB model
    const group = useRef<Group>(null!);
    const { nodes, materials } = useGLTF('/media/chainlink.glb') as GLTFResult;
    const { viewport } = useThree();

    const materialProps = {
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: true,
        backsideThickness: 2,
        samples: 10,
        resolution: 144,
        backsideResolution: 144,
        transmission: 0.1,
        roughness: 1,
        ior: 1.5,
        thickness: 0.25,
        chromaticAberration: 0.4,
        anisotropy: 0.3,
        distortion: 0.0,
        clearcoat: 1,
        attenuationColor: '#2957D3',
        color: '#2957D3'
    }

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();  // Get elapsed time
        const amplitude = 0.2;  // Max height (up) in z-direction
        const speed = 1;  // Adjust to control speed of the animation
        group.current.position.y = Math.sin(t * speed) * amplitude;  // Move up and down smoothly
    });

    return (
        <group ref={group} scale={viewport.width * 10} position={[-viewport.width / 4 , -0.5, viewport.height / 2 + 2 ]} castShadow dispose={null}>
            {/* Check for nodes.Curve before accessing its geometry */}
            {nodes.Curve && (
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve.geometry}
                    material={materials['SVGMat.001']}  // Safe assignment after ensuring Curve exists
                />
            )}
            <MeshTransmissionMaterial {...materialProps} />
        </group>
    );
}

// Preload of the GLB model
useGLTF.preload('/media/chainlink.glb');

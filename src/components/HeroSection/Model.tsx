"use client";

// Essentials: 
import React, { useRef, useLayoutEffect } from 'react';

// 3RDrei & R3JS: 
import { useGLTF, MeshTransmissionMaterial, Center, AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { type Mesh, type Material, type Clock } from 'three';

// R3F : 
import { useFrame, useThree, } from '@react-three/fiber';

// leva : 
import { useControls } from 'leva';
import { metalness, roughness, thickness } from 'three/webgpu';


interface MyGLTF {
    nodes: {
        path4?: Mesh;
    };
    materials: {
        SVGMat?: Material;
    };
}

export default function HeroModel() {
    // Loading GLB model
    const { nodes } = useGLTF('/media/xlogo.glb') as MyGLTF;
    const { viewport } = useThree();
    const meshRef = useRef<Mesh>(null);

    const materialProps = useControls({
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: true,
        backsideThickness: { value: 2, min: -10, max: 10 },
        samples: { value: 10, min: 0, max: 32, step: 1 },
        resolution: { value: 2048, min: 256, max: 2048, step: 256 },
        backsideResolution: { value: 1024, min: 32, max: 2048, step: 256 },
        transmission: { value: 1, min: 0, max: 1 },
        roughness: { value: 1, min: 0, max: 1, step: 0.01 },
        ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
        thickness: { value: 0.25, min: 0, max: 10, step: 0.01 },
        chromaticAberration: { value: 0.4, min: 0, max: 1 },
        anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
        distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
        distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
        temporalDistortion: { value: 0.65, min: 0, max: 1, step: 0.01 },
        attenuationDistance: { value: 0.5, min: 0, max: 2.5, step: 0.01 },
        clearcoat: { value: 1, min: 0, max: 1 },
        attenuationColor: '#ffffff',
        color: '#212121'
    })


    if (!nodes.path4) {
        console.error('Node path4 is not available');
        return null;
    }

    return (
        <group scale={viewport.width * 1.5} dispose={null}>
            <Center>
                <mesh ref={meshRef} geometry={nodes.path4.geometry} rotation-x={1.4} rotation-z={0.85} castShadow receiveShadow>
                    <MeshTransmissionMaterial {...materialProps} />
                </mesh>
            </Center>

        </group>
    );
}

// Preload of the GLB model
useGLTF.preload('/media/xlogo.glb');

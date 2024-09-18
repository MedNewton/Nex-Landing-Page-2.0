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

export default function XModel() {
    // Loading GLB model
    const { nodes } = useGLTF('/media/xlogo.glb') as MyGLTF;
    const { viewport } = useThree();
    const meshRef = useRef<Mesh>(null);

    const materialProps = {
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: true,
        backsideThickness: 2,
        samples: 10,
        resolution: 480,
        backsideResolution: 480,
        transmission: 1,
        roughness: 1,
        ior: 1.5,
        thickness: 0.25,
        chromaticAberration: 0.4,
        anisotropy: 0.3,
        attenuationDistance: 0.5,
        clearcoat: 1,
        attenuationColor: '#ffffff',
        color: '#212121'
    }


    if (!nodes.path4) {
        console.error('Node path4 is not available');
        return null;
    }

    return (
        <Center>
            <group scale={viewport.width * 0.5} dispose={null}>
                <mesh ref={meshRef} geometry={nodes.path4.geometry} rotation-x={1.4} rotation-z={0.2} castShadow receiveShadow>
                    <MeshTransmissionMaterial {...materialProps} />
                </mesh>

            </group>
        </Center>
    );
}

// Preload of the GLB model
useGLTF.preload('/media/xlogo.glb');

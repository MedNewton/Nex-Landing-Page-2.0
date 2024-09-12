"use client";

// Essentials: 
import React, { useRef } from 'react';

// 3RDrei & R3JS: 
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { type Mesh, type Material, type Clock } from 'three';

// R3F : 
import { useFrame, useThree } from '@react-three/fiber';


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

    // Mesh Animation
    useFrame(({ clock }) => {
        if (meshRef.current) {
            const elapsedTime = (clock as Clock).getElapsedTime();
            meshRef.current.position.y = Math.sin(elapsedTime) * 0.01;
        }
    });

    if (!nodes.path4) {
        console.error('Node path4 is not available');
        return null;
    }

    return (
        <group scale={viewport.width * 1.5} dispose={null}>
            <mesh ref={meshRef} geometry={nodes.path4.geometry} rotation-x={1.4}>
                <MeshTransmissionMaterial />
            </mesh>
        </group>
    );
}

// Preload of the GLB model
useGLTF.preload('/media/xlogo.glb');

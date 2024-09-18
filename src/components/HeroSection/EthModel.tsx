"use client";

// Essentials: 
import React, { useRef, useEffect } from 'react';

// 3RDrei & R3JS: 
import { useGLTF, useAnimations } from '@react-three/drei';
import { type Group, type Mesh, type Material, type AnimationClip, AnimationAction, LoopRepeat } from 'three';

// R3F : 
import { useThree } from '@react-three/fiber';

interface GLTFResult {
    nodes: {
        Object_4?: Mesh;
    };
    materials: {
        SILVER_metal?: Material; 
    };
    animations: AnimationClip[];
}

export default function EthModel() {
    const group = useRef<Group>(null!);
    const { nodes, materials, animations } = useGLTF('/media/ethereum_logo_3d.glb') as GLTFResult;
    const { actions } = useAnimations(animations, group);
    const { viewport } = useThree();

    useEffect(() => {
        const animationNames = Object.keys(actions);
        if (animationNames.length > 0) {
            const firstAnimationName = animationNames[0];
            if (firstAnimationName) {
                const firstAction = actions[firstAnimationName] as AnimationAction | undefined;
                if (firstAction) {
                    firstAction.play();
                    firstAction.setLoop(LoopRepeat, Infinity);
                    firstAction.timeScale = 0.6;
                }
            }
        }
    }, [actions]);

    return (
        <group ref={group} scale={viewport.width / 15} position={[viewport.width / 4 , 1.5, viewport.height / 10 - 6 ]} castShadow dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="E_th_0">
                                <mesh
                                    name="Object_4"
                                    castShadow
                                    receiveShadow={false}
                                    geometry={nodes.Object_4?.geometry}
                                    material={materials.SILVER_metal}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/media/ethereum_logo_3d.glb');

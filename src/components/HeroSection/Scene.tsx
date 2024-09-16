"use client";

// R3F : 
import { Canvas } from "@react-three/fiber";

// R3Drei :
import { AccumulativeShadows, CameraControls, Environment, Lightformer, RandomizedLight } from "@react-three/drei";

// Model(s) : 
import HeroModel from "./Model";
import TextModel from "./TextModel";

export default function HeroScene() {

    const { autoRotate, text, shadow, ...config } = {
        text: 'Nexlabs',
        backside: true,
        backsideThickness: 0.15,
        samples: 16,
        resolution: 360,
        transmission: 1,
        clearcoat: 1,
        clearcoatRoughness: 0,
        thickness: 1,
        chromaticAberration: 0.1,
        anisotropy: 0.64,
        roughness: 0.36,
        distortion: 0,
        distortionScale: 0.1,
        temporalDistortion: 0,
        ior: 1.25,
        color: '#FFFFFF',
        shadow: '#65BA76',
        autoRotate: false,
      }
    return (
        <section className="w-[97%] h-[90vh] rounded-xl mx-auto">
            <Canvas className="rounded-xl w-full max-w-full" shadows orthographic camera={{ position: [10, 20, 22], zoom: 60 }} gl={{ preserveDrawingBuffer: true }}>
                
                {/** The text and the grid */}
                <TextModel config={config} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 2.25]}>
                    {text}
                </TextModel>                
                {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
                <Environment resolution={32}>
                    <group rotation={[-Math.PI / 4, -0.3, 0]}>
                        <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
                        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
                        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
                        <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
                    </group>
                </Environment>
                {/** Soft shadows */}
                <AccumulativeShadows frames={100} color={shadow} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={1} scale={50} position={[0, -1.01, 0]}>
                    <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
                </AccumulativeShadows>
            </Canvas>
        </section>
    )
}
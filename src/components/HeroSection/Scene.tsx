"use client";

// R3F : 
import { Canvas } from "@react-three/fiber";

// R3Drei :
import { Environment } from "@react-three/drei";

// Model(s) : 
import HeroModel from "./Model";

export default function HeroScene() {
    return (
        <section className="w-screen h-screen">
            <Canvas>
                <directionalLight intensity={3} position={[0, 10, 2]} />
                <Environment preset="city" />
                <HeroModel />
            </Canvas>
        </section>
    )
}
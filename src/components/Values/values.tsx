"use client"

import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Card1 } from "./card1";
import { Card3 } from "./card3";
import { Card2 } from "./card2";

const Values = () => {
    return (
        <section className="w-full h-fit flex flex-col items-center justify-start p-6 gap-6">
            <h5 className="text-3xl font-semibold">Our Values</h5>
            <div className="w-full h-fit flex flex-row items-stretch justify-center gap-6">
                <div className="w-1/3 flex-grow flex flex-col items-center justify-start bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl p-4 gap-4">
                    <Canvas>
                        <Center>
                            <Card1 />
                        </Center>
                    </Canvas>
                    <div className="w-full h-fit flex flex-col items-center justify-start gap-3">
                        <h6 className="text-xl font-bold flex flex-row items-center">EVM and DeFi Expansion</h6>
                        <p className="text-base w-10/12 leading-relaxed text-center">
                        Expanding from our Ethereum base, Nex Labs is now embracing EVM-compatible blockchains. This strategic move aims to enhance user experience by leveraging more efficient, cost-effective, and secure DeFi networks, broadening our ecosystem{"'"}s reach and capabilities.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 flex-grow flex flex-col items-center justify-start bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl p-4 gap-4">
                    <Canvas>
                        <Center>
                            <Card2 />
                        </Center>
                    </Canvas>
                    <div className="w-full h-fit flex flex-col items-center justify-start gap-3">
                        <h6 className="text-xl font-bold flex flex-row items-center">Diversification, Simplified</h6>
                        <p className="text-base w-10/12 leading-relaxed text-center">
                        <strong>“The stock market is a device to transfer money from the impatient to the patient.”</strong> - Warren Buffett.
                        Guided by this principle, Nex Labs{"'"} indexes are meticulously designed to support a thoughtful and enduring approach to investing, aligning with long-term financial growth and stability.
                        </p>
                    </div>
                </div>
                <div className="w-1/3 flex-grow flex flex-col items-center justify-start bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl p-4 gap-4">
                    <Canvas>
                        <Center>
                            <Card3 />
                        </Center>
                    </Canvas>
                    <div className="w-full h-fit flex flex-col items-center justify-start gap-3">
                        <h6 className="text-xl font-bold flex flex-row items-center">Transparency at the Forefront</h6>
                        <p className="text-base w-10/12 leading-relaxed text-center">
                        Integrating blockchain data systems with oracles enhances transparency and accuracy in our index composition. This method ensures that underlying assets are always verifiable and accurately represented, creating a trustworthy environment for our users.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Values;
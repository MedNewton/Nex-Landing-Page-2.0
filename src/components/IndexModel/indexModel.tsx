"use client"

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import XModel from "../HeroSection/XModel";
import xmodel from '@assets/images/XLogoModel.png'

const SpotIndexModel = () => {
    return (
        <section className="w-full h-fit flex flex-col items-center justify-start p-6 gap-6">
            <div className="w-full h-fit flex flex-row items-stretch justify-between relative bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl p-4 gap-4  overflow-hidden">
                <div className="w-3/5 h-fit left-0 top-0 flex flex-col items-start justify-start p-4 gap-2">
                    <h5 className="text-3xl font-semibold">Nex Spot Index Model: Diversify with Confidence</h5>
                    <h6 className="text-xl font-medium flex flex-row items-center"> The Spot Index Standard Model for Portfolio Enhancement</h6>
                    <p className="text-base w-11/12 leading-relaxed">
                        The Spot Index Standard Model aims to enable investors to diversify their portfolios by investing in an asset index rather than a single cryptocurrency.
                        It generates a redeemable ERC-20 token, termed the {'"'}index token.{'"'}
                        Each index token is supported by collateral stored securely in a custodian wallet, reminiscent of wBTC backed by Bitcoin.
                    </p>
                    <h6 className="text-lg font-bold flex flex-row items-center">Key features:</h6>
                    <div className="grid grid-cols-2 gap-6 w-11/12">
                        <div className="h-fit flex flex-col items-start justify-start gap-2">
                            <h6 className="text-lg font-medium w-10/12">Automated Rebalancing of Asset Portfolios</h6>
                            <p className="text-base w-11/12 leading-relaxed">
                                Effortlessly keep your portfolio aligned with your goals as our system adjusts asset allocations automatically.
                            </p>
                        </div>
                        <div className="h-fit flex flex-col items-start justify-start gap-2">
                            <h6 className="text-lg font-medium w-10/12">Market Cap-Driven Weighting for Underlying Assets</h6>
                            <p className="text-base w-11/12 leading-relaxed">
                            Ensure accurate asset distribution with weights based on market capitalization, reflecting true market value.
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={xmodel} alt="x logo xlogo nex labs nexlabs" className="absolute right-0 -top-[20%] h-[90vh] w-auto"></Image>
            </div>

        </section>
    )
}

export default SpotIndexModel;
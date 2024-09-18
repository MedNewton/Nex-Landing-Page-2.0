import Image from "next/image";
import anfiLogo from "@assets/images/anfi.png"
import cr5Logo from '@assets/images/cr5.png'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { BITCOINLogo, ETHLogo, BNBLogo, SOLANALogo, XRPLogo } from "@/assets/icons/cryptoLogos";

const Catalogue = () => {
    return (
        <section className="w-full h-fit flex flex-col items-center justify-start p-6 gap-6">
            <h5 className="text-3xl font-semibold">Products Catalogue</h5>
            <div className="w-full flex flex-row items-stretch justify-between gap-2">
                <div className="w-2/3 flex flex-col items-start justify-start bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl p-4 gap-4">
                    <div className="w-full h-fit flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <Image src={cr5Logo} alt=" anfi ANFI index logo nexlabs" width={30} height={30}></Image>
                            <h6 className="text-xl font-bold flex flex-row items-center">CRYPTO 5 Index</h6>
                        </div>
                        <div className="w-fit h-fit flex flex-row items-center justify-end gap-2">
                            <div className="h-9 aspect-square rounded-full shadow-md dark:shadow-none flex flex-row items-center justify-center bg-nexGray-500">
                                <IoIosArrowRoundBack color="#111116" size={30} />
                            </div>
                            <div className="h-9 aspect-square rounded-full shadow-md dark:shadow-none flex flex-row items-center justify-center bg-nexGray-500">
                                <IoIosArrowRoundForward color="#111116" size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 px-2 h-fit flex flex-col items-start justify-start gap-6">
                        <p className="text-base w-11/12 leading-relaxed">
                            The {'"'}Crypto 5 Index{'"'} represents a meticulously curated basket of assets designed to provide investors with a secure and diversified entry into the digital assets industry. It not only offers stability through its carefully selected assets but also presents substantial growth potential. This makes it an ideal choice for crypto investors seeking a balanced and reliable investment option in the ever-evolving cryptocurrency landscape.
                        </p>
                        <div className="w-full h-fit grid grid-cols-3 items-start justify-start gap-2">
                            <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
                                <h6 className="text-lg font-medium">Collateralization:</h6>
                                <p className="text-base">N/A</p>
                            </div>
                            <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
                                <h6 className="text-lg font-medium">Value Backing CR5:</h6>
                                <p className="text-base">N/A</p>
                            </div>
                            <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
                                <h6 className="text-lg font-medium">Required to Back CR5:</h6>
                                <p className="text-base">N/A</p>
                            </div>
                        </div>
                        <div className="w-full h-fit flex flex-col items-start justify-start gap-4">
                            <h6 className="text-xl font-bold flex flex-row items-center">Composition</h6>
                            <div className="w-full h-fit grid grid-cols-5 gap-2">
                                <div className="w-full h-fit flex flex-col items-center justify-start gap-2">
                                    <div className="h-12 aspect-square">
                                        <BITCOINLogo />
                                    </div>
                                    <div className="h-fit w-full flex flex-col items-center justify-center gap-0">
                                        <h6 className="text-lg font-medium text-center">Bitcoin</h6>
                                        <p className="text-base text-center">71%</p>
                                    </div>
                                </div>
                                <div className="w-full h-fit flex flex-col items-center justify-start gap-2">
                                    <div className="h-8 mb-5 aspect-square">
                                        <ETHLogo />
                                    </div>
                                    <div className="h-fit w-full flex flex-col items-center justify-center gap-0">
                                        <h6 className="text-lg font-medium text-center">Ethereum</h6>
                                        <p className="text-base text-center">18%</p>
                                    </div>
                                </div>
                                <div className="w-full h-fit flex flex-col items-center justify-start gap-2">
                                    <div className="h-12 aspect-square">
                                        <BNBLogo />
                                    </div>
                                    <div className="h-fit w-full flex flex-col items-center justify-center gap-0">
                                        <h6 className="text-lg font-medium text-center">Binance Coin</h6>
                                        <p className="text-base text-center">5%</p>
                                    </div>
                                </div>
                                <div className="w-full h-fit flex flex-col items-center justify-start gap-2">
                                    <div className="h-12 aspect-square">
                                        <SOLANALogo />
                                    </div>
                                    <div className="h-fit w-full flex flex-col items-center justify-center gap-0">
                                        <h6 className="text-lg font-medium text-center">Solana</h6>
                                        <p className="text-base text-center">4%</p>
                                    </div>
                                </div>
                                <div className="w-full h-fit flex flex-col items-center justify-start gap-2">
                                    <div className="h-12 aspect-square dark:invert">
                                        <XRPLogo />
                                    </div>
                                    <div className="h-fit w-full flex flex-col items-center justify-center gap-0">
                                        <h6 className="text-lg font-medium text-center">Ripple XRP</h6>
                                        <p className="text-base text-center">2%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-1/3 flex-grow flex flex-col items-start justify-between gap-2">
                    <div className="w-full h-5/6 bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl">

                    </div>
                    <div className="w-full h-1/6 flex flex-row items-center justify-between gap-2 p-4 bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <Image src={cr5Logo} alt=" anfi ANFI index logo nexlabs" width={30} height={30}></Image>
                            <div className="w-fit h-fit flex flex-row items-baseline gap-2">
                                <h6 className="text-xl font-bold">CR5</h6>
                                <div className="w-fit h-fit flex flex-row items-center">
                                    <GoTriangleDown size={18} color="#F23645" />
                                    <p className="text-sm font-medium text-nexLightRed-500">-9.38%</p>
                                </div>
                            </div>
                        </div>
                        <h6 className="text-base font-medium flex flex-row items-center">1 Month</h6>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalogue;
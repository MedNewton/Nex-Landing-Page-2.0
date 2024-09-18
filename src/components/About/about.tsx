import xModel from "@assets/images/xModel.png";

const About = () => {
    return (
        <section className="w-[97%] h-fit flex flex-row items-center justify-between gap-6 p-6 bg-nexLightCard-500 dark:bg-nexDarkCard-500 shadow-lg dark:shadow-none rounded-xl">
            <div className="w-1/2 flex flex-col items-start justify-start gap-4">
                <h5 className="text-3xl font-semibold">Unlock passive investing with our index products</h5>
                <div className="w-full flex flex-col items-start justify-start gap-10">
                    <p className="text-lg leading-relaxed">
                        At the heart of our approach there is an index investing model designed to save your time. We create simple tools, ensuring that everyone, whether an individual or an institution, can effortlessly navigate the financial world.
                    </p>
                    <div className="w-full grid grid-cols-2 gap-6">
                        <div className="h-fit flex flex-col items-start justify-start gap-2">
                            <h6 className="text-lg font-bold flex flex-row items-center">Tailored Financial Tools</h6>
                            <p className="text-base w-11/12 leading-relaxed">
                                NEX offers a diverse range of customized instruments to meet the needs of individual and institutional investors.
                            </p>
                        </div>
                        <div className="h-fit flex flex-col items-start justify-start gap-2">
                            <h6 className="text-lg font-bold flex flex-row items-center">Market-Entry Made Easy</h6>
                            <p className="text-base w-11/12 leading-relaxed">
                                Our spot indices allow users to leverage both high and low-volatile assets, simplifying entry into the crypto market.
                            </p>
                        </div>
                        <div className="h-fit flex flex-col items-start justify-start gap-2">
                            <h6 className="text-lg font-bold flex flex-row items-center">Efficient Index Investing</h6>
                            <p className="text-base w-11/12 leading-relaxed">
                                Our {'"'}S&P 500 of crypto{'"'} model captures market trends, reducing time-consuming decisions for investors.
                            </p>
                        </div>
                        <div className="h-fit flex flex-col items-start justify-start gap-2">
                            <h6 className="text-lg font-bold flex flex-row items-center">User-Centric Solutions</h6>
                            <p className="text-base w-11/12 leading-relaxed">
                                NEX creates simple, accessible tools to help everyone navigate the financial world with ease and confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div
                    className="w-full h-[65vh] rounded-lg bg-center bg-no-repeat bg-contain bg-nexGray-500"
                ></div>
            </div>
        </section>
    );
};

export default About;

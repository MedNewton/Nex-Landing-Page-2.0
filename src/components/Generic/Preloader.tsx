interface preloaderProps{
    precentage: number;
}

const Preloader = ({precentage} : preloaderProps) => {
    return(
        <section className="preloader w-screen h-screen bg-nexGray-500 absolute top-0 left-0 z-50 flex flex-col items-center justify-center gap-3">
            <h5 className="text-nexBlack-500 font-semibold text-4xl">Nex Labs</h5>
        </section>
    )
}

export default Preloader;
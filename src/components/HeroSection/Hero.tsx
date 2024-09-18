import Link from "next/link";
import dynamic from "next/dynamic";
import Preloader from "../Generic/Preloader";

// 3D : 
const HeroScene = dynamic(() => import('@components/HeroSection/Scene'), {
    ssr: false,
    loading: () => (<></>)
})

const HeroSection = () => {
    return (
        <section className="w-screen h-fit min-h-[90vh] relative">
            <HeroScene />
            
        </section>
    )
}

export default HeroSection;
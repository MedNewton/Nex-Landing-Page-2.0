import Link from "next/link";
import dynamic from "next/dynamic";

// 3D : 
const HeroScene = dynamic(() => import('@components/HeroSection/Scene'), {
    ssr: false,
    loading: () => (<p>Loading ...</p>)
})

const HeroSection = () => {
    return (
        <>
            <HeroScene />
        </>
    )
}

export default HeroSection;
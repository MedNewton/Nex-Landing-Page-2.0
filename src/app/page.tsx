
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Sections: 
import Preloader from "@/components/Generic/Preloader";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/Hero";

export default function HomePage() {

  //const gsap = useGSAP();
  const [loading, setLoading] = useState<boolean>(false);
  const [fadeLoader, setFadeLoader] = useState<boolean>(false);

  useEffect(() => {
    if (fadeLoader) {
      gsap.delayedCall(0.5, () => setLoading(true));
    }
  }, [fadeLoader]);

  useEffect(() => {
    gsap.delayedCall(3, () => setFadeLoader(true));
  }, []);

  return (
    <>
      {
        !loading && <Preloader fade={fadeLoader} />
      }
      <main className="flex w-screen h-fit min-h-screen flex-col items-center justify-center bg-[#E7E7E7] text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
      </main>

    </>
  );
}

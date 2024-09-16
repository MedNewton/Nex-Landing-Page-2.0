
"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

// Sections: 
import Preloader from "@/components/Generic/Preloader";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/Hero";
import About from "@/components/About/about";

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
      <main className="flex w-screen h-fit min-h-screen flex-col items-center justify-center bg-nexGray-500 dark:bg-nexBlack-500 text-nexBlack-500 dark:text-white overflow-x-hidden space-y-4">
        <Navbar />
        <HeroSection />
        <About />
      </main>

    </>
  );
}

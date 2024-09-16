"use client";
import { useEffect, useLayoutEffect, memo } from 'react';
import gsap from 'gsap';

interface preloaderProps{
    precentage: number;
}

const Preloader = memo(function Loading({ fade }: { fade: boolean }) {
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from('.preloader', {
          width: '0%',
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      });
      return () => ctx.revert();
    }, []);
  
    useEffect(() => {
      console.log('fade effect', fade, Date.now());
      if (fade) {
        gsap.to('.loader-wrapper', { opacity: 0, ease: 'power1.in' });
      }
    }, [fade]);
  
    return (
      <div className="fixed flex justify-center bg-black items-center w-screen h-screen z-[1000] loader-wrapper">
        <div className="preloader w-full bg-white">&nbsp;</div>
      </div>
    );
  });

export default Preloader;
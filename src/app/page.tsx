import Link from "next/link";

// Sections: 
import HeroSection from "@/components/HeroSection/Hero";

export default function HomePage() {
  return (
    <main className="flex w-screen h-fit min-h-screen flex-col items-center justify-center bg-[#E7E7E7] text-white">
      <HeroSection />
    </main>
  );
}

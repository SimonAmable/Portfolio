"use client"

import Hero from "./Hero";
import Projects from "./Projects";
import ContactPage from "./contact/ContactPage";
// import LiquidChrome from "@/components/reactbits/Backgrounds/LiquidChrome/LiquidChrome";

export default function HomePageClient() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-black">
      {/* <LiquidChrome
        className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.1}
        amplitude={0.6}
        interactive={false}
      /> */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero/>
        <Projects/>
        <ContactPage/>
      </div>
    </main>
  );
}

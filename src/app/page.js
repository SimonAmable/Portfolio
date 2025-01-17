import Image from "next/image";

import Hero from "../app/ui/Hero";
import Projects from "../app/ui/Projects";
import ContactPage from "./ui/contact/ContactPage";
export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-black">
        <Hero/>
        <Projects/>
        <ContactPage/>
    </main>
  );
}

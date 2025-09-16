"use client"
import React from 'react'
import { FlipWords } from "@/components/ui/flip-words"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const words = [
    "I build full stack web apps",
    "I automate workflows",
    "I love to learn new things, currently I'm learning about agentic AI!",

    "I play volleyball",
    "I like to watch anime (I'm currently up to date on One Piece!)"
  ]

  return (
    <section className="h-[100vh] fade-up relative w-full px-6 pt-28  flex items-center justify-center text-white">
      {/* Subtle spotlight behind text */}
      

      <div className="max-w-3xl text-center py-32">
        <BlurFade inView direction="up" delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            HI, I&apos;M SIMON
          </h1>
        </BlurFade>
        <BlurFade inView direction="up" delay={1}>
          <div className="mt-4 text-lg md:text-xl text-white/80 min-h-[3rem] md:min-h-[5rem] flex items-center justify-center">
            <FlipWords words={words} duration={5000} className="px-0 text-white text-center" />
          </div>

          {/* <p className="mt-4 text-base md:text-lg text-white/60">
            I'm currently working on learning agentic systems and building projects to help me learn.
          </p> */}

          {/* <p className="mt-4 text-base md:text-lg text-white/60">
            Scroll down to check out my latest projects.
          </p> */}
          <div className="pt-[35vh]">
            <Button asChild variant="secondary" className="">
              <a href="#projects" className="flex items-center gap-2">
                View Projects

                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>  
            </Button>
          </div>
          
        </BlurFade>
      </div>
    </section>
  )
}

export default Hero
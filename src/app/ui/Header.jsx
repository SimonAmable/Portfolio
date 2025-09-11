"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "motion/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"
// Removed theme toggles to enforce dark mode only

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <motion.div
      className={`fixed left-0 right-0 z-50 flex justify-center px-2 transition-all duration-300 ease-in-out ${
        isScrolled ? 'py-2' : 'py-0'
      }`}
      style={{ top: isScrolled ? '0px' : '0px' }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, duration: 0.4, ease: 'easeOut' }}
    >
      <div className="mx-auto w-full transition-all duration-300 ease-in-out" style={{ maxWidth: isScrolled ? '60rem ' : '100%' }}>
        <div 
          className="relative flex items-center justify-center overflow-visible md:overflow-hidden transition-all duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2 w-full bg-black"
          style={{
            width: '100%',
            height: '60px',
            borderRadius: '50px',
            // '--glass-frost': '0.15',
            // '--glass-saturation': '1.1',
            // background: 'rgba(255, 255, 255, 0.15)',
            // backdropFilter: 'url("#glass-filter") saturate(1.1)',
            // boxShadow: `
            //   color-mix(in oklch, black 15%, transparent) 0px 0px 2px 1px inset,
            //   color-mix(in oklch, black 10%, transparent) 0px 0px 10px 4px inset,
            //   rgba(17, 17, 26, 0.05) 0px 4px 16px,
            //   rgba(17, 17, 26, 0.05) 0px 8px 24px,
            //   rgba(17, 17, 26, 0.05) 0px 16px 56px,
            //   rgba(17, 17, 26, 0.05) 0px 4px 16px inset,
            //   rgba(17, 17, 26, 0.05) 0px 8px 24px inset,
            //   rgba(17, 17, 26, 0.05) 0px 16px 56px inset
            // `
          }}
        >
          {/* SVG Filter for Glass Effect (disabled) */}
          {/*
          <svg 
            className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glass-filter" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
                <feImage 
                  x="0" 
                  y="0" 
                  width="100%" 
                  height="100%" 
                  preserveAspectRatio="none" 
                  result="map" 
                  href="data:image/svg+xml,..."
                />
                <feDisplacementMap in="SourceGraphic" in2="map" id="redchannel" result="dispRed" scale="-100" xChannelSelector="R" yChannelSelector="G" />
                <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />
                <feDisplacementMap in="SourceGraphic" in2="map" id="greenchannel" result="dispGreen" scale="-90" xChannelSelector="R" yChannelSelector="G" />
                <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green" />
                <feDisplacementMap in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" scale="-80" xChannelSelector="R" yChannelSelector="G" />
                <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />
                <feBlend in="red" in2="green" mode="screen" result="rg" />
                <feBlend in="rg" in2="blue" mode="screen" result="output" />
                <feGaussianBlur in="output" stdDeviation="0.5" />
              </filter>
            </defs>
          </svg>
          */}

          {/* Content Container */}
          <div className="w-full h-full flex items-center justify-center p-0 rounded-[inherit] relative z-10">
            <div className="flex justify-between items-center w-full px-2 sm:px-6 lg:px-8 md:grid md:grid-cols-[1fr_auto_1fr] md:place-items-center">
              
              {/* Left section - Branding */}
              <div className="flex items-center gap-3 flex-shrink-0 justify-self-start">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/man_looking_at_star_white.png" alt="Logo" width={62} height={62} unoptimized={true}/>
                  <span className={`text-xl md:text-2xl font-bold text-white transition-opacity duration-300 ${isScrolled ? 'hidden' : 'hidden sm:block'}`}>
                    Simonamable.com
                  </span>
                </Link>
              </div>

              {/* Center section - Navigation */}
              <div className="hidden md:flex items-center gap-6 justify-self-center">
                <Link 
                  href="/" 
                  className="text-sm font-semibold text-white hover:text-white/80 transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="#projects" 
                  className="text-sm font-semibold text-white hover:text-white/80 transition-colors"
                >
                  Projects
                </Link>
                {/* <Link 
                  href="/blog" 
                  className="text-sm font-semibold text-white hover:text-white/80 transition-colors"
                >
                  Blog
                </Link> */}
              </div>

              {/* Right section - GitHub and Contact */}
              <div className="flex items-center gap-3 flex-shrink-0 justify-self-end flex-row-reverse md:flex-row">
                {/* <AnimatedThemeToggler /> */}
                <a 
                  href="https://github.com/SimonAmable" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors hidden md:block"
                >
                  <svg className="w-6 h-6 hidden md:block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {/* Mobile dropdown */}
                <div className="md:hidden">
                  <DropdownMenu open={mobileOpen} onOpenChange={setMobileOpen}>
                    <DropdownMenuTrigger asChild>
                      <button
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:text-accent-foreground h-10 w-10 text-white hover:bg-white/10"
                      >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      sideOffset={8}
                      className="w-[calc(100vw-1rem)] mx-2 rounded-2xl border border-white/10 bg-black/95 p-2 text-white backdrop-blur supports-[backdrop-filter]:bg-black/70"
                    >
                      <DropdownMenuItem asChild>
                        <Link href="/" onClick={closeMobile} className="flex w-full items-center rounded-xl px-4 py-3 text-base font-semibold text-white hover:bg-white/10">About</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="#projects" onClick={closeMobile} className="flex w-full items-center rounded-xl px-4 py-3 text-base font-semibold text-white hover:bg-white/10">Projects</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/blog" onClick={closeMobile} className="flex w-full items-center rounded-xl px-4 py-3 text-base font-semibold text-white hover:bg-white/10">Blog</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile dropdown (replaced by shadcn DropdownMenu) */}
        </div>
      </div>
    </motion.div>
  )
}

export default Header
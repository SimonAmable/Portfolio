"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magicui/blur-fade"

export default function AutomatePage() {
  const handleChromeExtensionClick = () => {
    window.open('https://chromewebstore.google.com/detail/ezapply-auto-apply-extens/dhlpnfhiledjhokbojeeihoihahkjheh?authuser=0&hl=en', '_blank')
  }

  const handleDownloadClick = () => {
    window.open('https://chromewebstore.google.com/detail/ezapply-auto-apply-extens/dhlpnfhiledjhokbojeeihoihahkjheh?authuser=0&hl=en', '_blank')
  }

  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-black text-white">
      <div className="relative z-10 w-full flex flex-col items-center px-6 py-20">
        <BlurFade inView direction="up" delay={0.2}>
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Automate Your Job Applications
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12">
              Streamline your job search with our Chrome extension that automatically fills out application forms and creates applications with AI.
            </p>
            
            {/* Chrome Extension Button */}
            <div className="mb-16">
              <Button 
                onClick={handleChromeExtensionClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Chrome Extension
              </Button>
            </div>

            {/* Waitlist Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Waitlist</h2>
              <p className="text-white/70 mb-6">
                Be the first to know when new features are released and get early access to premium automation tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md"
                />
                <Button 
                  onClick={handleDownloadClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Download Extension
                </Button>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Auto-Fill Forms</h3>
                <p className="text-white/70">
                  Automatically fill out job application forms with your saved information.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">AI-Powered Applications</h3>
                <p className="text-white/70">
                  Generate personalized cover letters and resumes using AI technology.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Time Saving</h3>
                <p className="text-white/70">
                  Reduce application time from hours to minutes with our automation tools.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  )
}
import React from 'react'
import Image from 'next/image'

import { FlipWords } from "../../components/ui/flip-words"


const Hero = () => {
  const words = ["Code in Python","Make Website",  "Sometimes Build Robots","Play Volleyball!!!", "Learn New Things", "CREATE!!!!!!"];

  return (
    <div className='fade-up flex flex-row w-full  items-center justify-evenly bg-black text-white p-5'>
      <div className='flex flex-col items-center'>
      <Image
        src="/construction_man.gif"
        width={300}
        height={300}
        className=' text-white fill-white decoration-white'
        alt="Picture of the author" 
        unoptimized={true}
        />
        <p className=' text-lg lg:text-4xl font-semibold mb-10'>My Projects</p>

      </div>
      <div className=' '>
        <h6 className='pb-5 text-3xl font-bold'>Hi! Im Simon!</h6>

          <div className='text-xl text-gray-100 '>&nbsp;I like to<FlipWords words={words} /></div>
          

        <p className='text-xl text-gray-400 '> <br/>Scroll down to checkout my favorite projects! </p>
      </div>
      
    </div>
  )
}

export default Hero
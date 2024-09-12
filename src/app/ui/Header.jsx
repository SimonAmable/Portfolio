import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div className=' flex justify-between gap-5 px-12 py-10 bg-black text-white '>
    <a href='https://github.com/SimonAmable' target='_blank' ><Image
        src="/github.svg"
        width={40}
        height={40}
        className='hover:opacity-70 min-w-10 min-h-10'
        alt="Picture of the author"
        /></a>
        <div className='flex flex-row gap-10 font-mono font-bold text-l items-center lg:text-3xl lg:gap-5'>
            <Link href='/'><p>ABOUT</p> </Link>
            <Link href='#projects'><p>PROJECTS</p> </Link>
            <Link href='#footer'><p>CONTACT</p> </Link>
            
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-black py-10'>
      <p className='text-white text-lg py-2'>Contact me:</p>
      <div id="footer"className='flex gap-6 text-white bg-black w-full justify-center items-center  '>
          <Link href="https://github.com/SimonAmable" ><Image className=' transition-transform duration-100 transform hover:scale-110' src='/github.svg' width={40} height={40} alt='github'/></Link>
          <Link href="https://www.linkedin.com/in/simon-amable-59ab091ab/" ><Image src='/linkedin.svg' width={50} height={50} alt='LinkedIn' className='transition-transform duration-100 transform hover:scale-110'/></Link>
          {/* <Link href="" ><Image src='/discord-icon.svg' width={40} height={40} alt='discord'/></Link> */}
          <Link href="mailto:simonamable@gmail.com" ><MailOutlineIcon className='w-10 h-10 transition-transform duration-100 transform hover:scale-110'/></Link>
      </div>
    </div>
  )
}

export default Footer
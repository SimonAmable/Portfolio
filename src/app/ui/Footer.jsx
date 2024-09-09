import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className='flex gap-6 text-white bg-black w-full justify-center items-center py-10 '>
        <Link href="https://github.com/SimonAmable" ><Image className='hover:opacity-70' src='/github.svg' width={40} height={40} alt='github'/></Link>
        <Link href="https://www.linkedin.com/in/simon-amable-59ab091ab/" ><Image src='/linkedin.svg' width={50} height={50} alt='linkin'/></Link>
        <Link href="" ><Image src='/discord-icon.svg' width={40} height={40} alt='linkin'/></Link>
        <Link href="mailto:simonamable@gmail.com" ><MailOutlineIcon className='w-10 h-10'/></Link>
    </div>
  )
}

export default Footer
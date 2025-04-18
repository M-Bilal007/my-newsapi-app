import Image from 'next/image';
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import navBarImage from '../../../public/asset/download.png'
import Link from 'next/link';
export default function Navbar() {
  return (
    <div>
    <div className='flex gap-5 justify-around h-20 items-center bg-gray-800'>
        <div className='flex gap-2 items-center text-xl text-white font-bold '><Image alt='Navbar Image' src={navBarImage} width={40} height={40}/> Your News</div>
        <div className='flex gap-5 text-gray-400'>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/'}>Home</Link></div>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/categories/general'}>General</Link></div>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/categories/business'}>Business</Link></div>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/categories/sports'}>Sports</Link></div>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/categories/science'}>Scinece</Link></div>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/categories/health'}>Health</Link></div>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/categories/entertainment'}>Entertainment</Link></div>
          <div className='cursor-pointer hover:underline transition-all duration-200 hover:-translate-y-1'><Link href={'/categories/technology'}>Technology</Link></div>
        </div>
        <div><IoCartOutline size={25}/></div>
        <div className='flex h-12'>
          <input className='px-2 w-52 bg-gray-700 rounded-l-xl outline-none' type='text' placeholder='Explore News'/>
          <button className='px-2  bg-blue-600 text-white rounded-r-xl'>Search</button>
        </div>
      </div>
    </div>
  )
}

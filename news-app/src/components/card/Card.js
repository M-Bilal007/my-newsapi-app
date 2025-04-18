import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'
export default function Card({cardImage,heading,description}) {
  return (
    <div className='flex flex-col mx-3 rounded-2xl bg-gray-800 w-80'>
      <div>
        <Image alt='Card image' className='rounded-t-2xl' src={cardImage} width={400} height={400}/>
      </div>
      <div className='px-2 text-white py-1'>{heading}</div>
      <div className='px-2 text-white py-1'>{description}</div>
      <div className='py-4 mx-4'><Button/></div>
    </div>
  )
}

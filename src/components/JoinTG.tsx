import React, { JSX } from 'react'
import Link from 'next/link'

const JoinTG = ({url, content}:{url:string, content?:string}):JSX.Element => {
  return (
    <Link href={url} target="_blank" className='text-[wheat] bg-[#ED2F59] p-[.7rem] font-black rounded-lg cursor-pointer decoration-0'>{content} </Link>
  )
} 

export default JoinTG
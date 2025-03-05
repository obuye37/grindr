import React, { JSX } from 'react'
import Link from 'next/link'

const JoinTG = ({url, content}:{url:string, content?:string}):JSX.Element => {
  return (
    <Link href={url} target="_blank" className='text-[wheat] text-sm font-normal bg-[#ED2F59] p-2 sm:text-lg sm:p-[.7rem] sm:font-black rounded-lg cursor-pointer decoration-0'>{content}</Link>
  )} 
export default JoinTG
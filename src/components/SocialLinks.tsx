import React from 'react'
import Link from 'next/link'
import { Socials } from '../data/social'

const SocialLinks = () => {
  return (
    <div className='flex p-10 flex-col sm:flex-row sm:justify-center sm:items-center gap-2'>
      {Socials.map((val, idx) => 
        <Link target='_blank' href={val.url} key={idx}>
          <div>{val.logo} <span>{val.name}</span></div>
        </Link>
    )}
    </div>
  )
}

export default SocialLinks

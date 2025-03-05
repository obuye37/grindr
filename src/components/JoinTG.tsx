import React, { JSX } from 'react'
import Link from 'next/link'

const JoinTG = ({url, content}:{url:string, content?:string}):JSX.Element => {
  return (
    <Link href={url} target="_blank"  style={{color:'#eee', backgroundColor:'#ED2F59', padding:'.7rem', fontWeight:'bolder', borderRadius:'.5rem', cursor:'pointer', textDecoration:'none'}}>{content} </Link>
  )
}

export default JoinTG
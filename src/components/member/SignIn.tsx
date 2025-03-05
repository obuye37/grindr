import React from 'react'
import Link from 'next/link'

const SignIn = ({state}:{state:boolean}) => {
  return (
    <div className={`${state && "slidein"} bg-red-50`}>
        Sign in Component
    </div>
  )
}
export default SignIn


export const SignInBtn = () => {
    return (
      <Link href='/whitepaper' style={{background:'#422E64', padding:'.5rem', borderRadius:'.6rem 0 0 .6rem', color:'#eee', textDecoration:'none'}}>
        SignIn
      </Link>
    )
  }
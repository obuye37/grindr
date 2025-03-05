import React, { JSX } from 'react'
import Link from 'next/link'
import { JsxElement } from 'typescript'

const SignUp = ({state} : {state:boolean}): JSX.Element => {
    return (
     <div className={`${state && 'gap-1'}`}>
        sign Up component
     </div>
    )
  }
export default SignUp

export const SignUpBtn = (): JSX.Element => {
    return (
      <Link href='/whitepaper' style={{background:'#ED2F59', padding:'.5rem', borderRadius:' 0 .6rem .6rem 0 ', color:'#eee', textDecoration:'none'}}>
          SignUp
      </Link>
    )
  }

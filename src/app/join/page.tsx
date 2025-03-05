'use client'
import React, { useState } from 'react'
import SignUp from '@/components/member/SignUp'
import SignIn from '@/components/member/SignIn'

const Register = () => {
    const [slideIn, setSlideIn] = useState(true)
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'.7rem', flex:1, color:'#111', justifyContent:'center', alignItems:'center'}}>  
    {slideIn ? <SignUp state={slideIn} /> : <SignIn state={slideIn} />}
    {slideIn && <div style={{color:'wheat'}}>Already have an account? <span onClick={()=>setSlideIn(false)} style={{background:'wheat', color:'#111', padding:'.2rem .4rem', borderRadius:'5px', margin:'0 .3rem',  cursor:'pointer'}}>Signin</span></div>}
    {!slideIn && <div style={{color:'wheat'}}>Don't have an account yet? <span style={{background:'wheat', color:'#111', padding:'.2rem .4rem', borderRadius:'5px', margin:'0 .3rem', cursor:'pointer' }} onClick={()=>setSlideIn(true)}>Signup</span></div>}
    {slideIn && <small style={{color:'wheat'}}>forgot your password? <span style={{background:'wheat', color:'#111', padding:'.2rem .4rem', borderRadius:'5px', margin:'0 .3rem' }}>change password</span></small>}
    </div>
  )
}

export default Register
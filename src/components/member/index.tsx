import React, {JSX} from 'react'
import {SignInBtn} from './SignIn'
import {SignUpBtn} from './SignUp'

const styles = {
    display:'flex',
    gap: 1 
}

const SignInUp = (): JSX.Element => {
  return (
    <div style={styles} >
      <SignInBtn />
      <SignUpBtn />
    </div>
  )
}
 
export default SignInUp

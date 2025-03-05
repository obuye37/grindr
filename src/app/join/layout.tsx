import React, { ReactNode } from 'react'
import type { Metadata } from "next";

import styles from "@/app/styles/page.module.css"

export const metadata: Metadata = {
    title: "Home - Grindr",
    description: "Platform for web3 grinders",
  };

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className={styles.main} style={{display:'flex', gap:'2rem'}} >
        <div style={{height:'100vh', display: 'flex', flex:1, justifyContent:'center', alignItems:'center', color:'wheat', background:'#01013b'}}>
            Hello
        </div>
        {children}
    </main>
  )
}

export default Layout
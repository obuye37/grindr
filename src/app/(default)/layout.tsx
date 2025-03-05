import React, { ReactNode } from 'react'
import type { Metadata } from "next";

import styles from "@/app/styles/page.module.css"

export const metadata: Metadata = {
    title: "Home - Grindr",
    description: "Platform for web3 grinders",
  };

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className={styles.main} >
        {children}
    </main>
  )
}

export default Layout
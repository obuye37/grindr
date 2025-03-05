import React, { Dispatch, SetStateAction, MouseEvent, JSX } from 'react'
import styles from '../app/styles/page.module.css'
import Logo from '../assets/grinderLogo.png'
import Image from "next/image";
import { Contents } from '@/data/contents';
import JoinTG from './JoinTG';

interface NavigationProps {
  data: typeof Contents
  setActiveNav: Dispatch<SetStateAction<number>>
  setVisibility: Dispatch<SetStateAction<boolean>>
  setActiveSection: Dispatch<SetStateAction<string>>
  activeNav:number
}

const Navigation = ({data, setActiveNav, setVisibility, setActiveSection, activeNav}: NavigationProps): JSX.Element => {

  const handlePagination = (idx:number)  => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setVisibility(true)
    setActiveNav(idx)
    setActiveSection("")
    console.log("idx:", idx)
  }
  console.log("data: ", data)
  return (
    <header className={styles.navbar}> 
      <div style={{display:'flex', textDecoration:'none', cursor:'pointer'}} onClick={handlePagination(0)} >
        <Image style={{}} alt="logo" src={Logo} width={50} height={50} />
        <div style={{lineHeight:'1.25rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <div style={{fontSize:'1.5rem', fontFamily:'cursive', fontWeight:'bolder', letterSpacing:'.3rem', color:'#eee'}}>GRINDR</div>
          <small style={{textWrap:'nowrap', color:'#eee', letterSpacing:.7, fontStyle:'italic'}}>Reward for Grinding</small>
        </div>
      </div>
      <div className={styles.pagination}>
          {
            data && 
              <div className={styles.pagination}>
                {
                  data?.map((val, idx) => (
                    <div key={val.id} onClick={handlePagination(idx)} className={idx === activeNav ? `${styles.button} ${styles.activeNav}` : styles.button}>{val.title}</div>
                  ))
                }
              </div>
          }
        </div>
      <div className={styles.navLinks}><JoinTG url="" content='Get Started'/></div> 
    </header>
  )
}

export default Navigation
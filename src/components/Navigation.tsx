import React, { Dispatch, SetStateAction, MouseEvent, JSX, useState } from 'react'
import Image from "next/image";
import useWindowSize from '@rooks/use-window-size';

import { Contents } from '@/data/contents';
import Logo from '../assets/grinderLogo.png'
import JoinTG from './JoinTG';
import styles from '../app/styles/page.module.css'


interface NavigationProps {
  data: typeof Contents
  setActiveNav: Dispatch<SetStateAction<number>>
  setVisibility: Dispatch<SetStateAction<boolean>>
  setActiveSection: Dispatch<SetStateAction<string>>
  activeNav:number
}

const Navigation = ({data, setActiveNav, setVisibility, setActiveSection, activeNav}: NavigationProps): JSX.Element => {
  const [mobile, setMobile] = useState(false)
  const handlePagination = (idx:number)  => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setVisibility(true)
    setActiveNav(idx)
    setActiveSection("")
    setMobile(false)
    console.log("idx:", idx)
  }


  const {innerWidth} = useWindowSize()
 if(innerWidth != null) {
  return (
    <header className="relative grid grid-cols-2 items-center p-[0.8rem_1.2rem] sm:grid-cols-[25%_auto_25%]"> 
      <div style={{display:'flex', textDecoration:'none', cursor:'pointer'}} onClick={handlePagination(0)} >
        <Image alt="logo" src={Logo} width={50} height={50} />
        <div style={{lineHeight:'1.25rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <div style={{fontSize:'1.5rem', fontFamily:'lato', fontWeight:'bolder', letterSpacing:'.3rem', color:'#eee'}}>GRINDR</div>
          <small style={{textWrap:'nowrap', color:'#eee', letterSpacing:.7, fontStyle:'italic'}}>Reward for Grinding</small>
        </div>
      </div>
      { innerWidth >= 640 ? 
      <>
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
      </> : 
      <div className='flex flex-col gap-1 place-self-center justify-self-end px-4' onClick={()=> setMobile(!mobile)}>
        <div className='h-[3px] bg-gray-200 w-[25px]'/>
        <div className='h-[3px] bg-gray-200 w-[25px]'/>
        <div className='h-[3px] bg-gray-200 w-[25px]'/>
      </div>}
        <div className={mobile == true ? "absolute animate-in top-[76px] cursor-pointer px-4 w-full h-screen z-40 flex flex-col bg-[#01013bee]": "hidden"}>
          {
            data && 
              <div className="flex flex-col gap-2 my-4 cursor-pointer">
                {
                  data?.map((val, idx) => (
                    <div key={val.id} onClick={handlePagination(idx)} className={idx === activeNav ? `rounded-sm  p-[.3rem_1rem] text-[wheat] activeNav` : "rounded-none p-[.3rem_1rem] text-[wheat]"}>{val.title}</div>
                  ))
                }
              </div>
          }
          <div className='navLinks my-5'><JoinTG url="" content='Get Started'/></div>
        </div>
       
    </header>
  )
 }
    return <></>
}

export default Navigation




      
'use client'

import React, { useEffect, useState, MouseEvent } from "react";  
import { usePathname } from "next/navigation";
import useWindowSize from '@rooks/use-window-size'

import JoinTG from "@/components/JoinTG";
import Navigation from "@/components/Navigation";
import LeftRightPanes from "@/components/LeftRightPanes";
import SocialLinks from "@/components/SocialLinks";
import { Contents } from "@/data/contents";
import web3Image from '../../assets/web3Image.jpeg'


// const homeTitle = " GRINDR "
// console.log("web3Image: ", web3Image.src)


const Index:React.FC = () => { 
  const windowHeight = useWindowSize()
  const [ activeNav, setActiveNav ] = useState<number>(0)
  const [activeSection, setActiveSection] = useState<string>('');
  const [ pageVisible, setPageVisible] = useState<boolean>(true)

  const path = usePathname()

  // const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  

const handleVisible = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) =>  {
  event.preventDefault()
  setActiveSection(sectionId)
  setPageVisible(false)
};
// console.log('activeSection: ', activeSection)
const idx = Contents[0].content?.contentTitle
console.log("idx: ", idx)

const myStyle = {
  backgroundImage:`url(${web3Image.src})`,
  backgroundPosition: '150% 0',
  backgroundRepeat: 'no-repeat',
}

const error = true

  return (
    <>
      <Navigation data={Contents} setActiveNav={setActiveNav} activeNav={activeNav} setVisibility={setPageVisible} setActiveSection={setActiveSection} />
      <div className="flex" >
        <LeftRightPanes />
        <div className="pageContainer" style={activeNav == 0  ? myStyle: {}}>
        {
          Contents?.map((val, idx) => (
            <div 
            key={val.id} 
            className={ idx === activeNav ? "page active" : "hidden" } 
            >
              <div id={val.title} 
              className={val.title !== 'Home' ? 
                `${pageVisible && 'flex'} flex-col items-center justify-center w-full h-full gap-2`  : "pt-4 pb-16 pr-20 pl-20 place-self-center gap-2"}>
                  {val.title === 'Home' ? 
                  <div className="flex gap-2 flex-col">
                    <div className="text-md font-normal text-left text-[#efefef]">{val.subTitle}</div>
                    <div className="text-4xl sm:text-8xl font-[cursive] text-[whitesmoke]" style={{textShadow:'#111a 8px 7px', letterSpacing:'.5rem', WebkitTextStroke:'.3rem'}}>{val.content.contentTitle}</div>
                    <p style={{color: "whitesmoke", width:'60%', lineHeight:'1.5rem', letterSpacing:'.12rem' }}>
                    Unlock endless opportunities with Grandr—your gateway to the most exciting Web3 projects! Whether you're new to the Web3 grind or a seasoned pro, Grandr has got you. Grind for top-tier tokens, dive into campaigns, and contribute to the future of digital ecosystems. With Grandr, your efforts don’t go unnoticed; you’re at the heart of innovation, driving real impact in the Web3 space. <span style={{color:'#ED2F59', padding: '0 .5rem .2rem'}}>Ready to make your mark? Start grinding today and be part of something big!</span> 
                    </p>
                  </div>
                   : 
                   <>
                   <header className="text-7xl font-bold bg-gradient-to-r bg-clip-text from-purple-400 via-blue-800 to-purple-950 inline-block h-20 text-transparent">{val.title}</header>
                   <div className={val.content.article != "" ? "sm:px-48 sm:py-8 sm:text-xl sm:leading-8 leading-5 text-[wheat] px-48 py-8 text-justify text-lg columns-2" : "hidden"}>{val.content.article}</div>
                   </> 
                   }
                <div className="p-[1rem_0] text-[wheat]">
                  { val.title === "Home" ? 
                  <div>
                    <JoinTG url={val.content.url} content="Get Started"/>
                    <span style={{marginLeft:'10px'}}>and Start Earning like a Pro</span>  
                    </div> : val.title === "Socials" && <SocialLinks /> } 
                </div>
              </div>


              { val.title === 'About' && 
                Contents?.map((secVal, idx) => (
                    <div
                      key={idx}
                      style={{zIndex: activeSection === secVal.title.toLowerCase() ? "10000" : '0'}}
                      className={ activeSection === secVal.title.toLowerCase() ?  "activeSection" : "hidden" }
                      >
                        <div className="header">{secVal?.title}</div>
                        <div className="header">{secVal?.content?.contentTitle}</div>
                        <div className="header">{secVal?.content?.article}</div>
                      </div>
                  )
                )
              }
            </div>
          ))
        }
        {/* { activeNav === 1 &&
          <nav className={styles.sectionNav}>
            <div  className={styles.navListContainer}>
              { section?.map((val, idx) => (
                <Link key={idx} onClick={handleVisible(val.title.toLowerCase())} href={`#${val.title.toLowerCase()}`} >{val?.title}</Link>
              ))}
            </div>
          </nav>
        } */}
      </div>
      </div>
    </> 
  )
}

export default Index




 // const handleUpScroll = () => {
  //   if (activeSectionRef.current?.nextSibling) {
  //     const nextSibling = activeSectionRef.current?.nextSibling as HTMLDivElement
  //     activeSectionRef.current?.classList.remove(styles.activeSection);
  //     nextSibling.classList.add(styles.activeSection);
  //     activeSectionRef.current = nextSibling
  //   }
  //   console.log(activeSectionRef.current)
    
  //   // console.log(sectionNav)
  // }

 

  // useEffect(() => {
  //     const handleScroll = (event: WheelEvent) => { 
  //       const {deltaY} = event       
  //         console.log(window.innerHeight)
  //         const currentScrollPosition = window.scrollY
  //         // currentScrollPosition > prevScrollPos ? handleDownScroll : handleUpScroll;
  //         console.log("scroll: ", deltaY)
  //   }
  //   window.addEventListener("wheel", handleScroll)
  
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   }; 
  // },[activeRef.current])

//   useEffect(() => {
//     let handleScroll:()=>void
//     if(activeRef.current?.classList.contains(styles.active) && sectionNav) {
//        handleScroll = () => {        
//           console.log(window.innerHeight)
//           const currentScrollPosition = window.scrollY
//           // currentScrollPosition > prevScrollPos ? handleDownScroll : handleUpScroll;
//           console.log("scroll: ", currentScrollPosition)
//     }
//     window.addEventListener("wheel", handleScroll)
// }
  
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     }; 
//   },[activeRef.current])

  // useEffect(() => {
  //   sectionsRef.current = sectionsRef.current.slice(0, 0); // Clear the existing array

  //   // Populate sectionsRef with RefObject instances pointing to the div elements
  //   document.querySelectorAll('.sectionContent').forEach((element) => {
  //     sectionsRef.current.push(React.createRef<HTMLDivElement>());
  //   });
  // }, [section]); 

  // const handleMouseDown = () => {
  //   if(buttonRef.current) {
  //     buttonRef.current.style.color = "#222111"
  //   }
  // }
  //  const handleVisible = () => {
  // if (activeSectionRef.current?.previousElementSibling || activeSectionRef.current?.nextElementSibling) {
  //   const previousSibling = activeSectionRef.current?.previousElementSibling
  //   const nextSibling = activeSectionRef.current.nextElementSibling
  //       activeSectionRef.current.classList.add(styles.activeSection)
  //       activeSectionRef.current?.previousElementSibling?.classList.remove(styles.active);
  //       activeSectionRef.current?.nextElementSibling?.classList.remove(styles.active);
  // }
  //  }
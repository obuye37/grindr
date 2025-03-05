'use client'

import React, { useState } from "react";  
// import useWindowSize from '@rooks/use-window-size'

import JoinTG from "@/components/JoinTG";
import Navigation from "@/components/Navigation";
// import LeftRightPanes from "@/components/LeftRightPanes";
import SocialLinks from "@/components/SocialLinks";
import { Contents } from "@/data/contents";


const Index:React.FC = () => { 
  // const windowHeight = useWindowSize()
  const [ activeNav, setActiveNav ] = useState<number>(0)
  const [activeSection, setActiveSection] = useState<string>('');
  const [ pageVisible, setPageVisible] = useState<boolean>(true)

  // const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  

// const handleVisible = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) =>  {
//   event.preventDefault()
//   setActiveSection(sectionId)
//   setPageVisible(false)
// };
// console.log('activeSection: ', activeSection)


// const myStyle = {
//   backgroundImage:`url(${web3Image.src})`,
//   backgroundPosition: '150% 0',
//   backgroundRepeat: 'no-repeat',
// }

  return (
    <>
      <Navigation data={Contents} setActiveNav={setActiveNav} activeNav={activeNav} setVisibility={setPageVisible} setActiveSection={setActiveSection} />
      <div className="flex" >
        {/* <LeftRightPanes /> */}
        <div className={`relative h-[100vh] w-full p-[.5rem_auto] sm:p-[1.5rem_auto] ${activeNav == 0 ? `sm:bg-[url('../../assets/web3Image.jpeg')] sm:bg-no-repeat sm:bg-[top_left_150%]` : ""}`}>
        {
          Contents?.map((val, idx) => (
            <div 
            key={val.id} 
            className={ idx === activeNav ? "active" : "hidden" } 
            >
              <div id={val.title} 
              className={val.title !== 'Home' ? 
                `${pageVisible && 'flex'} flex-col items-center justify-center h-full w-full gap-2` : "p-4 sm:p-[1rem_5rem_4rem_5rem] place-self-center gap-2"}>
                  {val.title === 'Home' ? 
                  <div className="flex gap-2 flex-col pt-4 sm:py-10">
                    <div className="text-xs font-normal text-center text-[#efefef] sm:text-lg sm:text-left">{val.subTitle}</div>
                    <div className="text-7xl tracking-[.2rem] text-center font-extrabold inline-block px-1 -mx-2 font-[lato] bg-gradient-to-tr from-gray-50 via-blue-500 via-80% to-blue-950 text-transparent bg-clip-text sm:text-left sm:text-8xl sm:tracking-[1rem] " style={{textShadow:'#39035ecc 3px 4px 8px'}}>{val.content.contentTitle}</div>
                    <p className="text-[whitesmoke] w-full text-[16px] tracking-wider leading-6 text-justify sm:w-[60%] sm:tracking-[.12rem] sm:leading-[1.8rem]  sm:text-lg sm:text-left ">
                    Unlock endless opportunities with Grandr—your gateway to the most exciting Web3 projects! Whether you&apos;re new to the Web3 grind or a seasoned pro, Grandr has got you. Grind for top-tier tokens, dive into campaigns, and contribute to the future of digital ecosystems. With Grandr, your efforts don’t go unnoticed; you&apos;re at the heart of innovation, driving real impact in the Web3 space. <span style={{color:'#ED2F59', padding: '0 .5rem .2rem'}}>Ready to make your mark? Start grinding today and be part of something big!</span> 
                    </p>
                  </div>
                   : 
                   <>
                   <header className="text-4xl font-black bg-gradient-to-r bg-clip-text from-purple-400 via-blue-800 to-purple-950 inline-block h-20 text-transparent sm:text-7xl">{val.title}</header>
                   <div className={val.content.article != "" ? "text-sm px-5 sm:px-48 sm:py-8 sm:text-xl sm:leading-8 leading-5 text-[wheat] text-justify sm:columns-2" : "hidden"}>{val.content.article}</div>
                   </> 
                   }
                <div className="text-[wheat] py-[1rem] sm:py-0">
                  { val.title === "Home" ? 
                  <div className="sm:flex flex-col justify-center sm:justify-normal sm:flex-row sm:items-center">
                    <JoinTG url={val.content.url} content="Get Started"/>
                    <span className="ml-1.5 text-sm sm:text-lg">and Start Earning like a Pro</span>  
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
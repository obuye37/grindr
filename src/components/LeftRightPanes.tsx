import React from 'react'

const ads = false

const LeftRightPanes = () => {
  return (
    <>
    {
      ads && 
      <div style={{width: '20%', backgroundColor: 'beige', padding:'.8rem'}}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
      </div>
    }
    </>
  )
}

export default LeftRightPanes

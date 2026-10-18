import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'

const Hero = () => {
  const heroRef = useRef()
  useGSAP(()=>{
    gsap.from('.box1', {
      x: -100,
      duration: 1
    })
    gsap.from('.box2', {
      x: 100,
      duration: 1
    })
  }, {scope: heroRef})
  return (
    <div ref={heroRef} className='lg:h-[74vh] flex lg:flex-row flex-col gap-2 lg:px-10 px-3'>
      <div className='box1 w-full lg:h-full lg:w-[68%] h-[60vh] bg-amber-900'></div>
      <div className='box2 w-full lg:w-[32%]  bg-amber-200'></div>
    </div>
  )
}

export default Hero

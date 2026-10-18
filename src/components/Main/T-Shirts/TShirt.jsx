import React from 'react'
import TShirtCard from './TShirtCard';
import RightLeft from '../RightLeft';
import useRowScroll from '../../../hooks/useRowScroll';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const TShirt = () => {
  const {rowRef, scrollLeft, scrollRight} = useRowScroll()
  useGSAP(()=>{
    gsap.from(rowRef.current.children, {
      y: 30,
      stagger: 0.1,
      opacity: 0,
      scrollTrigger: {
        trigger: rowRef.current,
        markers: true,
        start: 'top 80%'
      }
    })
  })
  return (
    <div className='uppercase my-9 pl-3 lg:pl-10 flex flex-col gap-4'>
      <h2 className='text-sm flex items-center gap-2'>
        <div className='w-3 h-3 rounded-full border border-black bg-lime-300'></div>
        T-Shirts
      </h2>
      <div className='flex gap-2 overflow-x-auto no-scrollbar' ref={rowRef}>
        <TShirtCard />
        <TShirtCard />
        <TShirtCard />
        <TShirtCard />
        <TShirtCard />
        <TShirtCard />
        <TShirtCard />
        <TShirtCard />
        <TShirtCard />
      </div>
      <RightLeft onLeft={scrollLeft} onRight={scrollRight} pageButtonLabel='SHOW ALL'/>
    </div>
  )
}

export default TShirt

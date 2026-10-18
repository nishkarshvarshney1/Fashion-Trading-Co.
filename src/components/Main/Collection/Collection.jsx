import React from 'react'
import CollectionCard from './CollectionCard';
import useRowScroll from '../../../hooks/useRowScroll';
import RightLeft from '../RightLeft';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Collection = () => {
  const {rowRef, scrollLeft, scrollRight} = useRowScroll()

  useGSAP(()=>{
    gsap.from(rowRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      delay: 0.8
    })
    gsap.from('.js-heading', {
      x: -30,
      duration: 1,
      delay:0.5,
      opacity: 0
    })
  })
  return (
    <div className='js-collection pl-3 lg:pl-10 my-9 flex flex-col gap-4'>
      <h2 className='js-heading flex items-center gap-3 text-sm'>
        <div className=' w-3 h-3 rounded-full border border-black bg-lime-200 '></div>
        THE COLLECTION
      </h2>
      <div className='flex gap-2 overflow-x-auto no-scrollbar' ref={rowRef}>
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      </div>
      <RightLeft onLeft={scrollLeft} onRight={scrollRight} pageButtonLabel='FULL COLLECTION'/>
    </div>
  )
}

export default Collection

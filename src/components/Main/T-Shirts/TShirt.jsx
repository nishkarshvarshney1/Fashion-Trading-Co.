import React from 'react'
import TShirtCard from './TShirtCard';
import RightLeft from '../RightLeft';
import useRowScroll from '../../../hooks/useRowScroll';

const TShirt = () => {
  const {rowRef, scrollLeft, scrollRight} = useRowScroll()
  return (
    <div className='uppercase my-9 pl-10 flex flex-col gap-4'>
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

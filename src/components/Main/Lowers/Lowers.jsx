import React from 'react'
import LowersCard from './LowersCard';
import RightLeft from '../RightLeft';

const Lowers = () => {
  return (
    <div className='uppercase my-9 pl-10 flex flex-col gap-4'>
      <h2 className='text-sm flex items-center gap-2'>
        <div className='w-3 h-3 rounded-full border border-black bg-lime-300'></div>
        LOWERS
      </h2>
      <div className='flex gap-2 overflow-x-auto no-scrollbar'>
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
        <LowersCard />
      </div>
      <RightLeft />
    </div>
  )
}

export default Lowers

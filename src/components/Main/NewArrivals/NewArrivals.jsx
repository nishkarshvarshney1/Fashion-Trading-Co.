import React from 'react'
import NewArrivalsCard from './NewArrivalsCard';

const NewArrivals = () => {
  return (
    <div className='px-10 mt-15 flex flex-col gap-7'>
      <h2 className='text-2xl flex items-center gap-3 tracking-wide font-light'>
        <div className='w-5 h-5 rounded-full border-2 border-black bg-blue-400'></div>
        NEW ARRIVALS
      </h2>
      <div className='flex gap-2'>
      <NewArrivalsCard />
      <NewArrivalsCard />
      <NewArrivalsCard />
      </div>
    </div>
  )
}

export default NewArrivals

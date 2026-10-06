import React from 'react'
import BrandsCard from './BrandsCard';

const Brands = () => {
  return (
    <div className='px-10 my-25 flex flex-col gap-10'>
        <div className='relative'>
            <hr className='text-(--white-gray)' />
      <h2 className='absolute left-1/2 top-1/2 -translate-1/2 bg-(--white) px-5 tracking-wider'>BRANDS</h2>
      </div>
      <div className='flex gap-2'>
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
      </div>
    </div>
  )
}

export default Brands

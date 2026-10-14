import { ArrowRight, MoveRight } from 'lucide-react';
import React from 'react'

const BrandsPageCard = () => {
  return (
    <>
      <div className='lg:h-105 h-55 bg-(--white-gray) border border-(--white-gray) p-6 text-4xl hover:text-white relative shrink-0 rounded-sm hover:bg-black flex flex-col justify-between cursor-pointer'>
        <span className='text-sm'>01</span>
        <footer className='flex justify-between items-center'>
          <div className='text-xs flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full border bg-lime-300'></div>
            VIEW PRODUCTS
          </div>
          <MoveRight size={20} strokeWidth={1.5} />
        </footer>
        <span className='text-4xl font-[NHaas-bold] font-bold absolute top-1/2 left-1/2 -translate-1/2'>ADDIDAS</span>
    </div>
    </>
  )
}

export default BrandsPageCard

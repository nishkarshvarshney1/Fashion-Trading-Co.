import { Search } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 z-1000 grid grid-cols-[1fr_auto_1fr] mx-10 text-[0.8125rem] items-center py-4 bg-(--white) backdrop-blur-3xl font-extralight tracking-wide border-b border-(--white-gray)'>
        <h1 className='text-2xl'>FASHION TRADING CO.</h1>
        <div className='justify-self-center flex gap-6'>
            <h3 className='flex gap-1.5 items-center'>
                <div className='w-3 h-3 rounded-full border border-black bg-blue-400'></div>
                NEW ARRIVALS
                </h3>
            <h3>BRANDS</h3>
            <h3>T-SHIRTS</h3>
            <h3>LOWERS</h3>
            <h3>BOYS</h3>
            <h3>OUR STORE</h3>
        </div>
        <div className='justify-self-end flex gap-6'>
            <button className='flex items-center gap-2'>
                <Search size={16} />
                 SEARCH
                 </button>
            <h3>ACCOUNT</h3>
            <h3>CONTACT</h3>
        </div>
    </div>
  )
}

export default Header

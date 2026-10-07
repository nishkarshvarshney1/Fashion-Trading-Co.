import { Menu, Search } from 'lucide-react';
import React from 'react'

const Header = ({setIsMenuOpened}) => {
  return (
    <div className='sticky top-0 z-1000 lg:grid flex justify-between grid-cols-[1fr_auto_1fr] px-4 md:px-10 text-[0.8125rem] items-center py-4 bg-(--white)/70 backdrop-blur-xl font-extralight backdrop-saturate-150 tracking-wide border-b border-black/10'>
        <h1 className='lg:text-2xl text-lg'>FASHION TRADING CO.</h1>
        <div className='justify-self-center gap-6 lg:flex hidden'>
            <h3 className='gap-1.5 items-center xl:flex hidden'>
                <div className='w-3 h-3 rounded-full border border-black bg-blue-400'></div>
                NEW ARRIVALS
                </h3>
            <h3>BRANDS</h3>
            <h3>T-SHIRTS</h3>
            <h3>LOWERS</h3>
            <h3>BOYS</h3>
            <h3 className='xl:block hidden'>OUR STORE</h3>
        </div>
        <div className='justify-self-end lg:flex hidden gap-6 '>
            <button className='flex items-center gap-2'>
                <Search size={16} />
                 <span className='xl:inline hidden'>SEARCH</span>
                 </button>
            <h3>ACCOUNT</h3>
            <h3>CONTACT</h3>
        </div>
        {/* burger menu */}
        <button onClick={()=>{
            setIsMenuOpened(true)
        }}
         className='lg:hidden cursor-pointer'>
            <Menu />
        </button>
    </div>
  )
}

export default Header

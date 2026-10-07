import { Search } from 'lucide-react';
import React from 'react'

const Menu = ({setIsMenuOpened}) => {
    return (
        <div className='h-screen bg-(--white) text-[0.8125rem] p-4 flex flex-col gap-8 tracking-wide'>
            <div className='flex justify-between'>
                <h2 className='text-lg'>FASHION TRADING CO.</h2>
                <button onClick={()=>{
                    setIsMenuOpened(false)
                }}
                className='cursor-pointer text-sm'
                >CLOSE</button>
            </div>
            <div className='border-t border-black pt-5 gap-3 font-[NHaas-bold] flex flex-col'>
                <h3 className='gap-1.5 items-center flex'>
                    <div className='w-3 h-3 rounded-full border border-black bg-blue-400'></div>
                    NEW ARRIVALS
                </h3>
                <h3>BRANDS</h3>
                <h3>T-SHIRTS</h3>
                <h3>LOWERS</h3>
                <h3>BOYS</h3>
                <h3>OUR STORE</h3>
            </div>
            <div className='flex gap-3 flex-col border-t border-(--white-gray) pt-5'>
            <button className='flex items-center gap-2'>
                <Search size={16} />
                 <span>SEARCH</span>
                 </button>
            <h3>ACCOUNT</h3>
            <h3>CONTACT</h3>
        </div>
        </div>
    )
}

export default Menu

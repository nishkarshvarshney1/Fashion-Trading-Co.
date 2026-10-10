import { Search } from 'lucide-react';
import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Menu = ({ setIsMenuOpened }) => {
    const closeMenu = () => setIsMenuOpened(false)
    return (
        <div className='fixed inset-0 z-2000 bg-(--white) text-[0.8125rem] p-4 flex flex-col gap-8 tracking-wide lg:hidden smooth-left'>
            <div className='flex justify-between'>
                <h2 className='text-lg'><Link to='/'>FASHION TRADING CO. </Link></h2>
                <button onClick={() => {
                    setIsMenuOpened(false)
                }}
                    className='cursor-pointer text-sm'
                >CLOSE</button>
            </div>
            <nav className='border-t border-black pt-5 gap-3 font-[NHaas-bold] flex flex-col'>
                <NavLink onClick={closeMenu} to='new-arrivals' className='gap-1.5 items-center flex'>
                    <div className='w-3 h-3 rounded-full border border-black bg-blue-400'></div>
                    NEW ARRIVALS
                </NavLink>
                <NavLink onClick={closeMenu} to='/brands'>BRANDS</NavLink>
                <NavLink onClick={closeMenu} to='/t-shirts'>T-SHIRTS</NavLink>
                <NavLink onClick={closeMenu} to='/lowers'>LOWERS</NavLink>
                <NavLink onClick={closeMenu} to='/boys'>BOYS</NavLink>
                <NavLink onClick={closeMenu} to='/our-store'>OUR STORE</NavLink>
            </nav>
            <div className='flex gap-3 flex-col border-t border-(--white-gray) pt-5 justify-start'>
                <button className='flex items-center gap-2'>
                    <Search size={16} />
                    <span>SEARCH</span>
                </button>
                <button>ACCOUNT</button>
                <NavLink onClick={closeMenu} to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    )
}

export default Menu

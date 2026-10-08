import { Menu, Search } from 'lucide-react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = ({ setIsMenuOpened }) => {
    return (
        <div className='sticky top-0 z-1000 lg:grid flex justify-between grid-cols-[1fr_auto_1fr] px-4 lg:px-10 text-[0.8125rem] items-center py-4 bg-(--white)/70 backdrop-blur-xl font-extralight backdrop-saturate-150 tracking-wide border-b border-black/10'>
            <Link to='/'> <h1 className='lg:text-2xl text-lg'>FASHION TRADING CO.</h1> </Link>
            <nav className='justify-self-center gap-6 lg:flex hidden'>
                <NavLink to='/new-arrivals' className='gap-1.5 items-center xl:flex hidden hover:font-extrabold'>
                    <div className='w-3 h-3 rounded-full border border-black bg-blue-400'></div>
                    NEW ARRIVALS
                </NavLink>
                <NavLink to='/brands' className='hover:font-extrabold'>BRANDS</NavLink>
                <NavLink to='/t-shirts' className='hover:font-extrabold'>T-SHIRTS</NavLink>
                <NavLink to='/lowers' className='hover:font-extrabold'> LOWERS </NavLink>
                <NavLink to='/boys' className='hover:font-extrabold'>BOYS</NavLink>
                <NavLink to='/our-store' className='xl:block hidden hover:font-extrabold'>OUR STORE</NavLink>
            </nav>
            <nav className='justify-self-end lg:flex hidden gap-6 '>
                <button className='flex items-center gap-2'>
                    <Search size={16} />
                    <span className='xl:inline hidden hover:font-extrabold cursor-pointer'>SEARCH</span>
                </button>
                <button className='hover:font-extrabold cursor-pointer'>ACCOUNT</button>
                <NavLink to='/contact' className='hover:font-extrabold'>CONTACT</NavLink>
            </nav>
            {/* burger menu */}
            <button onClick={() => {
                setIsMenuOpened(true)
            }}
                aria-label='Open menu'
                className='lg:hidden cursor-pointer'>
                <Menu />
            </button>
        </div>
    )
}

export default Header

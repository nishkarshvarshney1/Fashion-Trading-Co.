import { Menu, Search } from 'lucide-react';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = ({ setIsMenuOpened }) => {
    const [expandMenu, setExpandMenu] = useState(false)
    return (
        <div>
            <div onMouseLeave={() => setExpandMenu(false)} className='sticky top-0 z-1000'>
                <div className=' lg:grid flex justify-between grid-cols-[1fr_auto_1fr] px-4 lg:px-10 text-[0.8125rem] items-center py-4 bg-(--white)/70 backdrop-blur-xl font-extralight backdrop-saturate-150 tracking-wide border-b border-black/10'>
                    <Link to='/'> <h1 onMouseEnter={() => setExpandMenu(false)} className='lg:text-2xl text-lg'>FASHION TRADING CO.</h1> </Link>
                    <nav className='justify-self-center gap-6 lg:flex hidden cursor-pointer'>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => setExpandMenu(true)} to='/new-arrivals' className='gap-1.5 items-center xl:flex hidden hover:font-extrabold'>
                            <div className='w-3 h-3 rounded-full border border-black bg-blue-400'></div>
                            NEW ARRIVALS
                        </NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => setExpandMenu(true)} to='/brands' className='hover:font-extrabold'>BRANDS</NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => setExpandMenu(true)} to='/t-shirts' className='hover:font-extrabold'>T-SHIRTS</NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => setExpandMenu(true)} to='/lowers' className='hover:font-extrabold'> LOWERS </NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => setExpandMenu(true)} to='/boys' className='hover:font-extrabold'>BOYS</NavLink>
                        <NavLink onMouseEnter={() => setExpandMenu(false)} to='/our-store' className='xl:block hidden hover:font-extrabold'>OUR STORE</NavLink>
                    </nav>
                    <nav className='justify-self-end lg:flex hidden gap-6 '>
                        <button className='flex items-center gap-2'>
                            <Search size={16} />
                            <span className='xl:inline hidden hover:font-extrabold'>SEARCH</span>
                        </button>
                        <button className='hover:font-extrabold'>ACCOUNT</button>
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
                {expandMenu && (
                    <div className='grid grid-cols-4 gap-2  h-[50vh] absolute w-full px-10 bg-(--white) text-(length:--ls) border-b'>
                        <div className='border-t pt-6 text-xl flex flex-col gap-2 font-bold'>
                            <h1>DISTANCE X NIKE</h1>
                            <h1>NIKE</h1>
                        </div>
                        <div className='border-t pt-6 flex flex-col gap-3'>
                            <h3>NEW IN</h3>
                            <h3>COLLECTION</h3>
                            <h3>CLOTHING</h3>
                            <h3>ACCESSORIES</h3>
                        </div>
                        <div className='border-t pt-6 flex flex-col gap-3'>
                            <h3>GIFT CARDS</h3>
                            <h3>LAST CHANCE</h3>
                        </div>
                        <div className='border-t pt-6 flex flex-col gap-3'>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header

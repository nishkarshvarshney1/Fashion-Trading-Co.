import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Menu, Search } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = ({ setIsMenuOpened, setSearchMenu, searchMenu }) => {

    const navRef = useRef()
    useGSAP(() => {
        gsap.from('.js-nav', {
            y: -30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            delay: 0.2
        })
    }, {scope: navRef})

    const [expandMenu, setExpandMenu] = useState(false)
    const boxCSS = 'bg-(--white-b) border border-(--white-gray) px-3 py-0.75 tracking-wide hover:bg-white cursor-pointer text-(length:--ls) rounded-sm'
    return (
        <>
            <div onMouseLeave={() => setExpandMenu(false)} className='sticky top-0 z-1000'>
                <div ref={navRef} className=' lg:grid flex justify-between grid-cols-[1fr_auto_1fr] px-4 lg:px-10 text-[0.8125rem] items-center h-17.5 bg-(--white) backdrop-blur-xl font-extralight backdrop-saturate-150 tracking-wide border-b border-black/10'>
                    <Link to='/'> <h1 onMouseEnter={() => setExpandMenu(false)} className='js-nav lg:text-2xl text-lg'>FASHION TRADING CO.</h1> </Link>
                    <nav className='justify-self-center gap-6 lg:flex hidden cursor-pointer h-full items-center'>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => setExpandMenu(true)} to='/new-arrivals' className='js-nav gap-1.5 items-center xl:flex hidden hover:font-extrabold'>
                            <div className='w-3 h-3 rounded-full border border-black bg-blue-400'></div>
                            NEW ARRIVALS
                        </NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => {
                            setExpandMenu(true)
                            setSearchMenu(false)
                        }} to='/brands' className='js-nav hover:font-extrabold'>BRANDS</NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => {
                            setExpandMenu(true)
                            setSearchMenu(false)
                        }} to='/t-shirts' className='js-nav hover:font-extrabold'>T-SHIRTS</NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => {
                            setExpandMenu(true)
                            setSearchMenu(false)
                        }} to='/lowers' className='js-nav hover:font-extrabold'> LOWERS </NavLink>
                        <NavLink onClick={() => setExpandMenu(false)} onMouseEnter={() => {
                            setExpandMenu(true)
                            setSearchMenu(false)
                        }} to='/boys' className='js-nav hover:font-extrabold'>BOYS</NavLink>
                    </nav>
                    <nav className='justify-self-end lg:flex hidden gap-6 '>
                        <button onClick={() => setSearchMenu(!searchMenu)}
                            className='flex items-center gap-2 hover:font-extrabold cursor-pointer'>
                            <Search className='js-nav' size={16} />
                            <span className='xl:inline hidden js-nav '>SEARCH</span>
                        </button>
                        <NavLink onClick={() => setSearchMenu(false)}
                            to='/contact' className='hover:font-extrabold js-nav'>CONTACT</NavLink>
                    </nav>
                    {/* burger menu */}
                    <button onClick={() => {
                        setIsMenuOpened(true)
                    }}
                        aria-label='Open menu'
                        className='lg:hidden cursor-pointer js-nav'>
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
                {searchMenu && (
                    <div className='px-10 h-[50vh] border-b absolute bg-(--white) w-full'>
                        <div className='flex justify-between text-(length:--ls) border-b items-center relative'>
                            <input type="text" className='flex-1 focus:outline-0 py-5 px-7 uppercase' autoFocus={searchMenu} />
                            <Search className='absolute left-2 top-1/2 -translate-1/2' size={20} strokeWidth={2} />
                            <div className='px-3 py-1 border border-black bg-white rounded-sm hover:bg-black hover:text-white cursor-pointer'>TO RESEARCH</div>
                        </div>
                        <div className='flex gap-2 mt-6 mb-13'>
                            <h3 className={boxCSS}>DISTANCE X NIKE</h3>
                            <h3 className={boxCSS}>STIFF</h3>
                            <h3 className={boxCSS}>NORDA</h3>
                            <h3 className={boxCSS}>DISTANCE X NIKE</h3>
                            <h3 className={boxCSS}>STIFF</h3>
                            <h3 className={boxCSS}>NORDA</h3>
                        </div>
                        <div className='flex gap-2'>
                            <div className='h-50 w-80 bg-(--white-b) border border-(--white-gray) py-3.5 px-5 text-lg'>
                                <h2>DISTANCE X NIKE</h2>
                            </div>
                            <div className='h-50 w-44 bg-(--white-b) border border-(--white-gray) rounded-sm'></div>
                            <div className='h-50 w-44 bg-(--white-b) border border-(--white-gray) rounded-sm'></div>
                            <div className='h-50 w-44 bg-(--white-b) border border-(--white-gray) rounded-sm'></div>
                            <div className='h-50 w-44 bg-(--white-b) border border-(--white-gray) rounded-sm'></div>
                            <div className='h-50 w-44 bg-(--white-b) border border-(--white-gray) rounded-sm'></div>
                        </div>
                    </div>
                )}
            </div>
            {(expandMenu || searchMenu) && (
                <div onClick={() => setSearchMenu(false)}
                    className='fixed inset-0 bg-black/20 z-999'>
                </div>
            )}
        </>
    )
}

export default Header

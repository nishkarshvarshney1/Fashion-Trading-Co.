import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Search } from 'lucide-react';
import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom';

const Menu = ({ setIsMenuOpened, setSearchMenu }) => {
    const closeMenu = () => setIsMenuOpened(false)
    const smallMenu = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(smallMenu.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.out'
    })
        tl.from('a, button', {
            x: 40,
            opacity: 0,
            stagger: 0.08

        }, '<')
    }, {scope: smallMenu})
    return (
        <div ref={smallMenu} className='fixed inset-0 z-2000 bg-(--white) text-[0.8125rem] p-4 flex flex-col gap-8 tracking-wide lg:hidden'>
            <div className='flex justify-between'>
                <Link onClick={closeMenu} to='/'><h2 className='text-lg'>FASHION TRADING CO.</h2></Link>
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
            </nav>
            <div className='flex gap-3 flex-col border-t border-(--white-gray) pt-5 justify-start'>
                <button onClick={()=> {
                    setSearchMenu(true)
                    closeMenu()
                }}
                 className='flex items-center gap-2'>
                    <Search size={16} />
                    <span>SEARCH</span>
                </button>
                <NavLink onClick={closeMenu} to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    )
}

export default Menu

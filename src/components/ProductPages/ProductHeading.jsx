import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'

const ProductHeading = (props) => {
    const boxCSS = 'bg-(--white-b) border border-(--white-gray) hover:bg-white hover:border-black cursor-pointer rounded-sm transition'
    const headingRef = useRef()
    useGSAP(()=>{
        gsap.from('.js-heading', {
            y: 30,
            duration: 1,
            delay: 0.3,
            opacity: 0,
            stagger: 0.2
        }, [props.title])
    }, {scope: headingRef})
    return (
        <div ref={headingRef} className='px-10 pt-20'>
            <div className='flex items-center gap-6 flex-col'>
                <h1 className='js-heading text-5xl bg-yellow-500 overflow-hidden'>{props.title}</h1>
                <div className='category flex gap-2 text-[0.8125rem]'>
                    <button className={`${boxCSS} bg-white border-black px-3 py-1`}>SEE ALL</button>
                    <button className={`${boxCSS} px-3 py-1`}>MEN SHOES</button>
                    <button className={`${boxCSS} px-3 py-1`}>WOMEN SHOES</button>
                </div>
            </div>
            <div className='flex justify-between mt-15 mb-5 text-(length:--ls)'>
                <span className='text-(--gray)'>{props.count} PRODUCTS</span>
                <div className='flex gap-3'>
                    <button className={`${boxCSS} px-3 py-1 w-45 text-left`}>FEATURED</button>
                    <button className='px-3 py-1 bg-black text-white rounded-sm'>FILTER</button>
                </div>
            </div>
        </div>
    )
}

export default ProductHeading

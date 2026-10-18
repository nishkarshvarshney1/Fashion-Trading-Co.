import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'

const ProductHeading = (props) => {
    const boxCSS = 'bg-(--white-b) border border-(--white-gray) hover:bg-white hover:border-black cursor-pointer rounded-sm'
    const headingRef = useRef()
    const categoryRef = useRef()
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(headingRef.current.children, {
            y: 30,
            duration: 0.5,
            opacity: 0,
            ease: 'sine.out',
            stagger: 0.05
        })
        tl.from([...categoryRef.current.children, '.js-filter'], {
            opacity: 0,
            stagger: 0.01,
            duration: 0.5
        }, '-=0.3')
    }, { dependencies: [props.title], revertOnUpdate: true })
    return (
        <div className='px-10 pt-20'>
            <div className='flex items-center gap-6 flex-col'>
                <h1 ref={headingRef} className='text-5xl overflow-hidden'>
                    {(props.title).split('').map((e) => <span className='inline-block'>{e}</span>)}
                </h1>
                <div ref={categoryRef} className='flex gap-2 text-[0.8125rem]'>
                    <button className={`${boxCSS} bg-white border-black px-3 py-1`}>SEE ALL</button>
                    <button className={`${boxCSS} px-3 py-1`}>MEN SHOES</button>
                    <button className={`${boxCSS} px-3 py-1`}>WOMEN SHOES</button>
                </div>
            </div>
            <div className='js-filter flex justify-between mt-15 mb-5 text-(length:--ls)'>
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

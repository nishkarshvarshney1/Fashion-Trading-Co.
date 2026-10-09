import React from 'react'

const ProductHeading = () => {
    const boxCSS = 'bg-(--white-b) border border-(--white-gray) hover:bg-white hover:border-black cursor-pointer rounded-sm transition'
    return (
        <div className='px-10 pt-20'>
            <div className='flex items-center gap-6 flex-col'>
                <h1 className='text-5xl'>BOYS</h1>
                <div className='flex gap-2 text-[0.8125rem]'>
                    <button className={`${boxCSS} bg-white border-black px-3 py-1`}>SEE ALL</button>
                    <button className={`${boxCSS} px-3 py-1`}>MEN SHOES</button>
                    <button className={`${boxCSS} px-3 py-1`}>WOMEN SHOES</button>
                </div>
            </div>
            <div className='flex justify-between mt-15 mb-5 text-(length:--ls)'>
                <span className='text-(--gray)'>603 PRODUCTS</span>
                <div className='flex gap-3'>
                    <button className={`${boxCSS} px-3 py-1 w-45 text-left`}>FEATURED</button>
                    <button className='px-3 py-1 bg-black text-white rounded-sm'>FILTER</button>
                </div>
            </div>
        </div>
    )
}

export default ProductHeading

import React from 'react'

const ProductCard = () => {
    return (
        <div className='h-135 bg-(--white-b) border border-(--white-gray) rounded-sm flex flex-col justify-between pb-6 px-4'>
            <div className='h-[70%]'></div>
            <div className='flex gap-2 items-center'>
                <div className='w-2.5 h-2.5 rounded-full border border-black bg-lime-300'></div>
                <span className='text-(length:--ls)'>HOMME</span>
            </div>
            <div>
                <h2 className='text-sm'>NIKE</h2>
                <span className='text-sm'>VOMERO PLUS</span>
            </div>
            <span className='text-sm'>180,000$</span>
        </div>
    )
}

export default ProductCard

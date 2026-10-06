import React from 'react'

const CollectionCard = () => {
  return (
    <div className='flex justify-between bg-(--white-b) border-2 rounded-sm border-(--white-gray) h-98 w-56 flex-col text-sm uppercase p-4 shrink-0'>
      <div className='h-[60%]'></div>
      <div className='flex gap-2 items-center'>
        <div className='w-2.5 h-2.5 bg-(--white) border border-black rounded-full'></div>
        UNISEXE
      </div>
      <div>
        <h3 className='font-[NHaas-bold]'>distance x nike</h3>
        <h3>vomero plus</h3>
      </div>
      <span>₹500</span>
    </div>
  )
}

export default CollectionCard

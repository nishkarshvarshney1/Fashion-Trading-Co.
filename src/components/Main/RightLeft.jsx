import { MoveLeft, MoveRight } from 'lucide-react';
import React from 'react'

const RightLeft = ({onLeft, onRight, pageButtonLabel}) => {
  return (
    <div>
      <footer className='flex gap-2'>
        <button onClick={onRight}
         className='bg-(--white-b) border border-(--white-gray) px-3 flex justify-center items-center rounded-sm cursor-pointer hover:bg-(--white-gray) active:scale-90 transition'><MoveLeft size={15}/></button>
        <button onClick={onLeft}
         className='bg-(--white-b) border border-(--white-gray) px-3 flex justify-center items-center rounded-sm cursor-pointer hover:bg-(--white-gray) active:scale-90 transition'><MoveRight size={15}/></button>
        <button className='bg-(--white-b) border border-(--white-gray) px-3 py-1 text-xs lg:text-[0.8125rem] rounded-sm cursor-pointer hover:bg-white hover:border-black transition active:scale-95'>{pageButtonLabel}</button>
      </footer>
    </div>
  )
}

export default RightLeft

import { MoveLeft, MoveRight } from 'lucide-react';
import React from 'react'

const RightLeft = () => {
  return (
    <div>
      <footer className='flex gap-2'>
        <button className='bg-(--white-b) border border-(--white-gray) px-3 flex justify-center items-center rounded-sm cursor-pointer hover:bg-(--white-gray) active:scale-90 transition'><MoveLeft size={15}/></button>
        <button className='bg-(--white-b) border border-(--white-gray) px-3 flex justify-center items-center rounded-sm cursor-pointer hover:bg-(--white-gray) active:scale-90 transition'><MoveRight size={15}/></button>
        <button className='bg-(--white-b) border border-(--white-gray) px-3 py-1 text-[0.8125rem] rounded-sm cursor-pointer hover:bg-white hover:border-black transition active:scale-95'>SHOP ALL</button>
      </footer>
    </div>
  )
}

export default RightLeft

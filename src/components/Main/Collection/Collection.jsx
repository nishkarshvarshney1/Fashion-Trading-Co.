import React from 'react'
import CollectionCard from './CollectionCard';
import { MoveLeft, MoveRight } from 'lucide-react';

const Collection = () => {
  return (
    <div className='pl-10 my-9 flex flex-col gap-4'>
      <h2 className='flex items-center gap-3 text-sm'>
        <div className='w-3 h-3 rounded-full border border-black bg-lime-200 '></div>
        THE COLLECTION
      </h2>
      <div className='flex gap-2 overflow-x-auto no-scrollbar'>
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      </div>
      <footer className='flex gap-2'>
        <button className='bg-(--white-b) border border-(--white-gray) px-3 flex justify-center items-center rounded-sm cursor-pointer hover:bg-(--white-gray) active:scale-90 transition'><MoveLeft size={15}/></button>
        <button className='bg-(--white-b) border border-(--white-gray) px-3 flex justify-center items-center rounded-sm cursor-pointer hover:bg-(--white-gray) active:scale-90 transition'><MoveRight size={15}/></button>
        <button className='bg-(--white-b) border border-(--white-gray) px-3 py-1 text-[0.8125rem] rounded-sm cursor-pointer hover:bg-white hover:border-black transition active:scale-95'>FULL COLLECTION</button>
      </footer>
    </div>
  )
}

export default Collection

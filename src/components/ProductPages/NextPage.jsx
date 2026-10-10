import React from 'react'
import { Link } from 'react-router-dom';

const NextPage = (props) => {
    const buttonCSS = 'hover:bg-white cursor-pointer px-2 py-0.5 rounded-xs'
  return (
    <>
    <div className='flex items-center flex-col my-20 gap-10'>
      <div className='bg-black w-2/5 h-18 text-white px-4 text-xl py-2 flex items-end cursor-pointer hover:bg-white hover:border hover:text-black rounded-sm'>NEXT PAGE</div>
      <div className='flex gap-3.5 text-sm'>
        <button className={`${buttonCSS} border bg-white`}>1</button>
        <button className={buttonCSS}>2</button>
        <button className={buttonCSS}>3</button>
        <button className={buttonCSS}>...</button>
        <button className={buttonCSS}>8</button>
      </div>
    </div>
    <div className='flex text-xs px-10 gap-4 mb-15'>
        <Link to='/' className='text-(--gray) flex gap-1.5'> HOME <span>/</span></Link>
        <span>{props.title}</span>
    </div>
    </>
  )
}

export default NextPage

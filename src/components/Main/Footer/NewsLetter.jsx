import React from 'react'

const NewsLetter = () => {
  return (
    <div className='border-t border-black pt-5 mb-10'>
        <div className='w-full max-w-82 flex flex-col gap-4'>
          <h3>NEWSLETTER</h3>
        <p className='text-sm mb-5'>Don't miss any new products by subscribing to our newsletter</p>
        <input type="email" placeholder='YOUR-EMAIL@MAIL.COM' className='bg-white px-4 py-1 rounded-sm border border-black'/>
        <div className='flex items-center gap-3 text-sm'>
          <input type="checkbox" />
          <p>By signing up, you agree to out Privacy Policy</p>
        </div>
        <button className='py-1 px-4 rounded-sm border border-black bg-(--yellow)'>
          SIGN UP
        </button>
        </div>
      </div>
  )
}

export default NewsLetter

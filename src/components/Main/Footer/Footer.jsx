import React from 'react'
import NewsLetter from './NewsLetter';
import CustomerCare from './CustomerCare';
import FollowUs from './FollowUs';

const Footer = () => {
  return (
    <div className='grid grid-cols-[2fr_1fr_1fr] px-10 gap-3 text-[0.8125rem] tracking-wide pb-20'>
      <NewsLetter />
      <CustomerCare />
      <FollowUs />  
    </div>
  )
}

export default Footer

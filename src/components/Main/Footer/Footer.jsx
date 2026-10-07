import React from 'react'
import NewsLetter from './NewsLetter';
import CustomerCare from './CustomerCare';
import FollowUs from './FollowUs';

const Footer = () => {
  return (
    <div className='flex flex-col lg:grid grid-cols-[2fr_1fr_1fr] px-3 lg:px-10 text-[0.8125rem] lg:gap-3 tracking-wide pb-20'>
      <NewsLetter />
      <CustomerCare />
      <FollowUs />  
    </div>
  )
}

export default Footer

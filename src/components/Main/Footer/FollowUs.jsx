import { MoveDown } from 'lucide-react';
import React, {useState} from 'react'

const FollowUs = () => {
    const [followPanelOpen, setFollowPanelOpen] = useState(false)
    return (
        <div onClick={()=>{
            setFollowPanelOpen(!followPanelOpen)
        }}
         className='border-t border-black pt-5 cursor-pointer'>
            <h3 className='flex gap-2 items-center'><MoveDown size={14} className={`transition duration-200 lg:hidden ${followPanelOpen ? 'rotate-180' : 'rotate-0'}`}/> FOLLOW US</h3>
            <h4 className={`${followPanelOpen ? 'flex' : 'hidden'} gap-2 items-center mt-5 text-xs lg:flex`}>
                <div className='w-2 h-2 rounded-full border border-black'></div>
                IG
            </h4>
        </div>
    )
}

export default FollowUs

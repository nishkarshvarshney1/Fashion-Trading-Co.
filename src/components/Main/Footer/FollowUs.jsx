import { MoveDown } from 'lucide-react';
import React, {useState} from 'react'

const FollowUs = () => {
    const [followPanelOpen, setFollowPanelOpen] = useState(false)
    return (
        <div onClick={()=>{
            setFollowPanelOpen(!followPanelOpen)
        }}
         className='border-t border-black pt-5'>
            <h3 className='flex gap-2 items-center'><MoveDown size={14} className='lg:hidden' /> FOLLOW US</h3>
            <h4 className={`${followPanelOpen ? 'flex' : 'hidden'} gap-2 items-center mt-5 text-xs`}>
                <div className='w-2 h-2 rounded-full border border-black'></div>
                IG
            </h4>
        </div>
    )
}

export default FollowUs

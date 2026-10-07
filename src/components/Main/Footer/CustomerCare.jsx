import { MoveDown } from 'lucide-react';
import React, {useState} from 'react'

const CustomerCare = () => {
    const [customerPanelOpen, setCustomerPanelOpen] = useState(false)
    const [storePanelOpen, setStorePanelOpen] = useState(false)
    return (
        <div className='border-t border-black pt-5'>
            <h3 onClick={()=>{
                setCustomerPanelOpen(!customerPanelOpen)
            }}
             className='pb-5 flex items-center gap-2'><MoveDown size={14} className='lg:hidden'/> CUSTOMER CARE</h3>
            <div className={`pb-5 text-xs flex-col gap-2 ${customerPanelOpen ? 'flex' : 'hidden'}`}>
                <h4 className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full border border-black'></div>
                    EMAIL : JHANAK.NISHU11@GMAIL.COM
                </h4>
                <h4 className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full border border-black'></div>
                    RETURN AND EXCHANGES
                </h4>
                <h4 className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full border border-black'></div>
                    Q&A
                </h4>
                <h4 className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full border border-black'></div>
                    COOKIES POLICY
                </h4>
                <h4 className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full border border-black'></div>
                    PRIVACY POLICY
                </h4>
            </div>
            <h3 onClick={()=>{
                setStorePanelOpen(!storePanelOpen)
            }}
             className='border-t pb-5 pt-5 border-black flex gap-2 items-center'><MoveDown size={14} className='lg:hidden' /> OUR STORE</h3>
            <h4 className={`${storePanelOpen ? 'flex' : 'hidden'} gap-2 items-center text-xs mb-5`}>
                <div className='w-2 h-2 rounded-full border border-black'></div>
                OUR STORE
            </h4>
        </div>
    )
}

export default CustomerCare

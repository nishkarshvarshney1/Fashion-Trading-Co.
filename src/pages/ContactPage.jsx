import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const ContactPage = () => {
    return (
        <div className='flex flex-col gap-5 bg-(--white) uppercase px-10 mt-10'>
            <div className='flex flex-col items-center gap-2'>
                <h4 className='text-(length:--ls) text-(--gray)'>contact us</h4>
                <h1 className='text-5xl'>get in touch</h1>
                <h4 className='text-(length:--ls) text-(--gray)'>HAVE A QUESTION, NEED HELP, OR INTERESTED IN WHOLESALE?
                    WE'RE HERE TO HELP.</h4>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='p-5 bg-(--green) border border-green-600 flex flex-col gap-2 relative'>
                    {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg> */}
                    <h3 className='text-lg'>chat on whatsapp</h3>
                    <h4 className='text-(length:--ls) text-(--gray)'>GET INSTANT REPLY DURING BUSINESS HOURS.</h4>
                    <ArrowRight className='absolute right-3 top-1/2 -translate-1/2' />
                </div>
                <div className='p-5 flex flex-col gap-2 relative border border-(--white-gray) bg-(--white-b)'>
                    <Mail />
                    <h3 className='text-lg'>Email us</h3>
                    <h4 className='text-(length:--ls) text-(--gray)'>WE'LL GET BACK TO YOU WITHIN 24 HOURS.</h4>
                    <ArrowRight className='absolute right-3 top-1/2 -translate-1/2' />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className='border border-(--white-gray) bg-(--white-b) p-5 flex flex-col gap-2'>
                    <MapPin />
                    <h4>our address</h4>
                    <p>1234 Fashion Street,<br/>
                        Karol Bagh, New Delhi - 110005 <br/>
                        India</p>
                </div>
                <div className='border border-(--white-gray) bg-(--white-b) p-5 flex flex-col gap-2'>
                    <Phone />
                    <h4>Phone / Whatsapp</h4>
                    <h5>+91 99270 87362</h5>
                    <h6>MON - SAT, 10 AM - 8 PM</h6>
                </div>
                <div className='border border-(--white-gray) bg-(--white-b) p-5 flex flex-col gap-2'>
                    <Clock />
                    <h4>business hours</h4>
                    <h5>monday - saturday</h5>
                    <h6>10:00 AM - 8:00 PM</h6>
                    <h6>SUNDAY - CLOSED</h6>
                </div>
            </div>
            <div className='border border-(--white-gray) bg-(--white-b) p-5 flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-sm'>still have questions?</h5>
                    <h3 className='text-lg'>we're here to help</h3>
                </div>
                <div>
                    <p className='text-xs'>Send us a message and we'll get back to you as soon as possible.</p>
                    <ArrowRight size={14}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage

import Image from 'next/image';
import React from 'react';
import Quote from '../../../public/Quote.svg';
import Track from '../../../public/Track.svg';
import Profile from '../../../public/Profile.svg';

const Testimonials = () => {
    return (
        <div className='px-[7vw] py-[100px]'>
            {/* Testimonial container */}
            <div className="p-10 bg-[#F7F5F9] w-full rounded-lg">
                {/* Testimonial header */}
                <div className='flex items-center gap-6'>
                    <Image src={Quote} alt='Quote Icon' />
                    <div className='font-semibold text-[24px]'>Testimonials</div>
                </div>
                {/* Testimonial content */}
                <div className='font-light text-18px leading-[30px] text-[#6D747A] tracking-wider my-8'>
                    {/* Testimonial text */}
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </div>
                {/* Testimonial footer */}
                <div className='flex flex-wrap justify-between gap-8'>
                    {/* Testimonial image */}
                    <Image src={Track} alt='Track' className='sm:order-1 order-2' />
                    {/* Testimonial profile */}
                    <div className='flex items-center gap-6 sm:order-2 order-1 '>
                        {/* Testimonial profile image */}
                        <Image src={Profile} alt='Profile Photo' className='w-[80px]' />
                        <div>
                            {/* Testimonial profile details */}
                            <div className='font-semibold text-[18px] tracking-wider text-[#8064A2]'>Shubha Nagarajan</div>
                            <div className='text-[14px] tracking-wider text-[#0096C8] mt-1'>Classical Dancer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
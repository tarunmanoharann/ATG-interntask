import Image from 'next/image';
import React from 'react';
import HeroBannerImage from '../../../public/HeroBannerImage.svg';
import Form from './Form';

const HeroBanner = () => {
    return (
        <div className='px-[7vw] pt-[135px] bg-[#F7F5F9]'>
            {/* Main content section */}
            <div className='flex lg:flex-row flex-col xl:gap-32 lg:gap-20 gap-10'>
                <div>
                    {/* Title and description */}
                    <div className='flex flex-col gap-8'>
                        <div className='font-semibold italic sm:text-[36px] text-[20px] tracking-wide'>Explore your <span className='text-[#0096C8]'>hobby</span> or <span className='text-[#8064A2]'>passion</span></div>
                        <div className='font-light text-[14px] leading-[30px] tracking-wide flex flex-col gap-4'>
                            <div>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</div>
                            <div>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</div>
                        </div>
                    </div>
                    {/* Hero banner image (visible on larger screens) */}
                    <Image src={HeroBannerImage} alt='Hero Banner Image' priority={true} className='mt-20 xl:block hidden' />
                </div>

                {/* Form component */}
                <Form />
            </div>

            {/* Hero banner image (visible on smaller screens) */}
            <Image src={HeroBannerImage} alt='Hero Banner Image' priority={true} className='mt-10 mx-auto xl:hidden block' />
        </div>
    );
}

export default HeroBanner;
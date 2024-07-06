'use client'
import React, { useState, useEffect } from 'react';

const Top = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop >= 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-10 left-[5vw] flex flex-col items-center gap-3 ${isVisible ? 'visible' : 'hidden'}`}>
            <div onClick={scrollToTop} className="w-10 h-10 rounded-full bg-zinc-400 flex items-center justify-center drop-shadow-2xl cursor-pointer text-[#939CA3] hover:text-white hover:bg-[#8064A2]" aria-label="Scroll to top">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-white rotate-180'>
                    <path d="M6.00015 5.07101L2.17915 1.25001C1.76515 0.836014 1.09315 0.836014 0.679152 1.25001C0.265152 1.66401 0.265152 2.33601 0.679152 2.75001L5.29315 7.36401C5.68415 7.75501 6.31715 7.75501 6.70715 7.36401L11.3212 2.75001C11.7352 2.33601 11.7352 1.66401 11.3212 1.25001C10.9072 0.836014 10.2352 0.836014 9.82115 1.25001L6.00015 5.07101Z" fill="currentColor" />
                </svg>
            </div>
            <div className='text-[14px] leading-[16px] font-semibold text-[#8064A2] p-1 bg-zinc-300 rounded-lg drop-shadow-2xl lg:block hidden'>Go to top</div>
        </div>
    );
};

export default Top;
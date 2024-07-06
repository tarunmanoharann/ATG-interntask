import Image from 'next/image';
import React from 'react';
import Plus from '../../../public/Plus.svg';

const Add = () => {
    return (
        <div className='px-[7vw] py-[100px] bg-[#F7FDFF] '>
            {/* Container for the add section */}
            <div className="bg-white w-full rounded-lg p-10 border border-[#CED4DA] rounded-lg">
                {/* Header */}
                <div className='flex items-center gap-6'>
                    <Image src={Plus} alt='Plus Icon' />
                    <div className='font-semibold text-[24px]'>Add your own</div>
                </div>
                {/* Description */}
                <div className='font-light text-18px leading-[30px] my-8'>
                    Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, do you know someone who should be on hobbycue?
                    Go ahead and Add your Own page Go ahead and Add your Own page
                </div>
                {/* Button */}
                <button className='font-semibold text-[14px] hover:text-white hover:bg-[#8064A2] duration-300 leading-[16px] px-7 py-3 border border-[#8064A2] rounded-lg text-[#8064A2]'>
                    Add new
                </button>
            </div>
        </div>
    );
}

export default Add;
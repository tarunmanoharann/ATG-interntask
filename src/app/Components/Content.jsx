import Image from 'next/image';
import React from 'react';
import ContentHeroImage from '../../../public/ContentHeroImage.svg';

const Content = () => {
  return (
    <div className='px-[7vw] pt-[100px] bg-[#F7FDFF]'>
      <div>
        {/* Title */}
        <div className='sm:text-[36px] text-[20px] font-medium italic'>Your <span className='text-[#8064A2]'>Hobby</span>, Your <span className='text-[#0096C8]'>Community...</span></div>
        {/* Get started button */}
        <button className='text-[18px] font-semibold text-white bg-[#8064A2] rounded-lg px-8 py-4 mt-8'>Get started</button>
      </div>
      {/* Hero image */}
      <Image src={ContentHeroImage} alt='Content Hero Image' priority={true} className='mt-[100px]' />
    </div>
  );
}

export default Content;
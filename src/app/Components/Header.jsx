import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/Logo.svg';
import Search from '../../../public/Search.svg';
import Dropdown from '../../../public/Dropdown.svg';
import Explore from '../../../public/Explore.svg';
import Hobbies from '../../../public/Hobbies.svg';
import Bookmark from '../../../public/Bookmark.svg';
import Bell from '../../../public/Bell.svg';
import Cart from '../../../public/Cart.svg';
import Find from '../../../public/Find.svg';
import Menu from '../../../public/Menu.svg';
import DropdownList from './DropdownList';

const Header = () => {
    return (
        <div className='px-[7vw] py-4 flex items-center justify-between bg-white drop-shadow-lg fixed w-full z-10'>
            {/* Logo Section */}
            <div className="flex items-center gap-9">
                <Image src={Logo} alt='Logo' className='sm:w-[200px] w-[175px] cursor-pointer' />
                {/* Search Bar Section */}
                <div className='text-[12px] leading-[16px] w-[300px] h-10 xl:flex hidden items-center'>
                    <input type="text" placeholder='Search here...' className='font-light bg-[#EBEDF0] text-[#939CA3] rounded-l-lg p-3 w-[85%] h-10 ' />
                    <button className='bg-[#8064A2] w-[15%] rounded-r-lg h-10'>
                        <Image src={Search} alt='Search Icon' className='mx-auto' />
                    </button>
                </div>
            </div>

            {/* Icons Section */}
            <div className='flex items-center gap-6'>
                {/* Explore Dropdown */}
                <div className='lg:flex hidden items-center hover:text-[#8064A2]'>
                    <Image src={Explore} alt='Explore Icon' className='w-5 h-5 ' />
                    <DropdownList name="Explore" className="w-full " />
                </div>
                {/* Hobbies Dropdown */}
                <div className='lg:flex hidden items-center hover:text-[#8064A2]'>
                    <Image src={Hobbies} alt='Hobbies Icon' />
                    <div className='font-semibold text-[14px] leading-[22px] ml-1 mr-2'>Hobbies</div>
                    <Image src={Dropdown} alt='Dropdown Icon' />
                </div>
                {/* Additional Icons */}
                <Image src={Find} alt='Find Icon' className='xl:hidden ' />
                <Image src={Bookmark} alt='Bookmark Icon' className='md:block hidden ' />
                <Image src={Bell} alt='Bell Icon' />
                <Image src={Cart} alt='Cart Icon' className='md:block hidden' />
                <Image src={Menu} alt='Menu Icon' className='lg:hidden' />
                {/* Sign In Button */}
                <button className='text-[14px] text-[#8064A2] hover:text-white hover:bg-[#8064A2] duration-300 leading-[16px] font-semibold border-2 border-[#8064A2] rounded-lg px-8 py-3 lg:block hidden'>Sign In</button>
            </div>
        </div>
    );
}

export default Header;
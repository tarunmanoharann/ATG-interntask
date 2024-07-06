'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import GoogleIcon from '../../../public/Google.svg';
import FacebookIcon from '../../../public/Facebook.svg';
import LockIcon from '../../../public/Lock.svg';

const Tab = ({ isActive, onClick, text }) => {
    return (
        <div
            className={`cursor-pointer ${isActive ? 'text-[#8064A2] border-b-2 border-[#8064A2]' : 'text-[#939CA3]'} `}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

const Form = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleTabClick = (isSignInTab) => {
        setIsSignIn(isSignInTab);
    };

    return (
        <div className='flex flex-col'>
            {/* Sign In/Join In tabs */}
            <div className='font-semibold text-[16px] leading-[30px] flex gap-8 mb-8'>
                <Tab isActive={isSignIn} onClick={() => handleTabClick(true)} text="Sign In" />
                <Tab isActive={!isSignIn} onClick={() => handleTabClick(false)} text="Join In" />
            </div>

            <div className='flex lg:flex-col flex-col-reverse lg:order-1 order-2'>
                {/* Social media login options */}
                <div className='flex flex-col gap-4'>
                    <AuthOption text="Continue with Google" icon={GoogleIcon} />
                    <AuthOption text="Continue with Facebook" icon={FacebookIcon} />
                </div>

                {/* Or connect with text */}
                <div className='text-[12px] leading-[1px] font-semibold text-center my-7 border-b-2'>
                    <span className='bg-[#F7F5F9] px-2'>Or connect with</span>
                </div>
            </div>

            <div className='lg:order-2 order-1'>
                {/* Email and Password inputs */}
                <input type="email" placeholder='Email' className='w-full rounded-lg p-[12px] text-[12px] leading-[16px]' />
                <input type="password" placeholder='Password' className='w-full rounded-lg p-[12px] text-[12px] leading-[16px] mt-4' />

                {/* Remember me and Forgot password section (only visible for Sign In) */}
                {isSignIn && (
                    <div className='flex justify-between my-6'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" aria-label='Check' />
                            <div className='text-[12px] leading-[16px]'>Remember me</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={LockIcon} alt='Lock' className='w-[12px] h-[15px]' />
                            <div className='text-[12px] leading-[16px]'>Forgot password?</div>
                        </div>
                    </div>
                )}

                {/* Password strength indicator and Terms of Service section (only visible for Join In) */}
                {!isSignIn && (
                    <>
                        <PasswordStrengthIndicator />
                        <div className='text-[12px] text-[#939CA3] py-3'>By continuing, you agree to our <span className='text-black'>Terms of Service</span> and <span className='text-black'>Privacy Policy</span>.</div>
                    </>
                )}

                {/* Continue button */}
                <button className='w-full rounded-lg py-3 border-2 border-[#000] text-[14px] leading-[16px] font-semibold hover:text-white hover:bg-[#8064A2] hover:border-[#8064A2] duration-300'>{isSignIn ? 'Continue' : 'Agree and Continue'}</button>
            </div>
        </div>
    );
};

const AuthOption = ({ text, icon }) => {
    return (
        <div className='relative lg:w-[410px] text-center py-3 border-2 border-[#8064A2] rounded-lg text-[14px] leading-[16px] font-semibold'>
            {text}
            <Image src={icon} alt={`${text} Icon`} className='absolute top-[12px] left-[24px]' />
        </div>
    );
};

const PasswordStrengthIndicator = () => {
    return (
        <div className='flex items-center justify-between mt-2'>
            <div className='flex gap-1'>
                {/* Password strength indicators */}
                <div className='w-10 h-1 rounded bg-white'></div>
                <div className='w-10 h-1 rounded bg-white'></div>
                <div className='w-10 h-1 rounded bg-white'></div>
            </div>
            {/* Password strength text */}
            <div className='font-semibold text-[10px] leading-[16px] text-[#939CA3] tracking-wider'>Password strength</div>
        </div>
    );
};

export default Form;
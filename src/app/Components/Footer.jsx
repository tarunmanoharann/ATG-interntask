import React from 'react'
import IconFacebook from '../../../public/IconFacebook.svg'
import IconTwitter from '../../../public/IconTwitter.svg'
import IconInstagram from '../../../public/IconInstagram.svg'
import IconPinterest from '../../../public/IconPinterest.svg'
import IconGoogle from '../../../public/IconGoogle.svg'
import IconYoutube from '../../../public/IconYoutube.svg'
import IconTelegram from '../../../public/IconTelegram.svg'
import IconEmail from '../../../public/IconEmail.svg'
import Image from 'next/image'

const Footer = () => {

    const socialIcons = [IconFacebook, IconTwitter, IconInstagram, IconPinterest, IconGoogle, IconYoutube, IconTelegram, IconEmail];

    return (
        <div>
            <div className='px-[7vw] py-[60px] flex sm:flex-row flex-col gap-8 lg:flex-nowrap flex-wrap justify-between'>
                {/* Hobbycue links */}
                <div className='text-[14px] leading-[18px] tracking-wide'>
                    <div className='font-bold'>Hobbycue</div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div>About Us</div>
                        <div>Our Services</div>
                        <div>Work with Us</div>
                        <div>FAQ</div>
                        <div>Contact Us</div>
                    </div>
                </div>

                {/* How Do I links */}
                <div className='text-[14px] leading-[18px] tracking-wide'>
                    <div className='font-bold'>How Do I</div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div>Sign Up</div>
                        <div>Add a Listing</div>
                        <div>Claim Listing</div>
                        <div>Post a Query</div>
                        <div>Add a Blog Post</div>
                        <div>Other Queries</div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='text-[14px] leading-[18px] tracking-wide'>
                    <div className='font-bold'>Quick Links</div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div>Listings</div>
                        <div>Blog Posts</div>
                        <div>Claim Listing</div>
                        <div>Shop / Store</div>
                        <div>Community</div>
                    </div>
                </div>

                {/* Social Media and Invite Friends */}
                <div>
                    {/* Social Media */}
                    <div>
                        <div className='text-[14px] leading-[18px] tracking-wide font-bold'>Social Media</div>
                        <div className="flex flex-wrap gap-6 mt-4">
                            {socialIcons.map((icon, index) => (
                                <Image key={index} src={icon} alt={`Social Icon ${index}`} />
                            ))}
                        </div>
                    </div>

                    {/* Invite Friends */}
                    <div className='mt-[50px]'>
                        <div className='text-[14px] leading-[18px] tracking-wide font-bold mb-4'>Invite Friends</div>
                        <div className='text-[12px] leading-[16px] flex'>
                            <input type="email" placeholder='Email ID' className='text-[#939CA3] rounded-l-lg px-4 py-3 border-2 border-[#8064A2] w-[80%]' />
                            <button className='bg-[#8064A2] text-white tracking-wide font-semibold w-[20%] py-3 border-2 border-[#8064A2] rounded-r-lg'>Invite</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer text */}
            <div className='text-center text-[#08090A] bg-[#F7F5F9] py-[30px] text-[14px] leading-[18px] tracking-wide font-semibold'>
                © Purple Cues Private Limited
            </div>
        </div>
    );
}

export default Footer;
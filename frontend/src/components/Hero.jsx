import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden'>
            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex flex-col justify-center items-start p-10 sm:p-14 bg-[#F9F9F9]'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base uppercase tracking-wider'>Sustainable Style</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-snug font-bold'>
                        Embrace the Future of Eco-Friendly Fashion
                    </h1>
                    <p className='text-gray-600 py-4 sm:py-6 max-w-md leading-relaxed'>
                        Discover our latest arrivals, designed to combine style with sustainability. Make a difference with every purchase.
                    </p>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <p className='font-semibold text-sm md:text-base hover:text-[#29A19C] transition-colors duration-300'>
                            SHOP NOW
                        </p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <div className='w-full sm:w-1/2'>
                <img 
                    className='w-full h-full object-cover' 
                    src={assets.hero_img} 
                    alt="Eco-friendly fashion banner" 
                    style={{ backgroundColor: '#FFE8E5' }} // Light pink background color
                />
            </div>
        </div>
    );
};

export default Hero;

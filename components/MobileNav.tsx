import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
    nav: boolean,
    toggleNavHandle: () => void,
}

function MobileNav({ nav, toggleNavHandle }: Props) {
    const navAnimation = nav ? "translate-x-0" : "-translate-x-[100%]";

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-all 
            top-0 left-0 right-0 bottom-0 z-[1000] bg-[#200f31] lg:hidden`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center 
                justify-center">
                <div className='nav-link-mobile'>Home</div>
                <div className='nav-link-mobile'>Tour</div>
                <div className='nav-link-mobile'>Hotel</div>
                <div className='nav-link-mobile'>Review</div>
                <div className='nav-link-mobile'>Contact</div>
                <a href="#" className='relative inline-flex items-center 
                        justify-center px-10 py-3 overflow-hidden font-medium group
                        tracking-tighter text-white bg-gray-800 rounded-lg'>
                    <span className='absolute w-0 h-0 transition-all duration-800
                            ease-out bg-green-600 rounded-full group-hover:w-56
                            group-hover:h-56'>
                    </span>
                    <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg
                            opacity-30 bg-gradient-to-t from-transparent via-transparent
                            to-gray-700'>
                    </span>
                    <span className='relative'>
                        Book Now
                    </span>
                </a>
            </div>
            <div className='absolute cursor-pointer top-[2rem] z-[1000] right-[2rem] 
                w-[2rem] h-[2rem] text-white' onClick={toggleNavHandle}>
                <XMarkIcon />
            </div>
        </div>
    );
};

export default MobileNav;

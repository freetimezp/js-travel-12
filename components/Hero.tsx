import React from 'react';

import SearchBox from './helper/SearchBox';

function Hero() {
    return (
        <div className='relative w-[100%] h-[88vh]'>
            <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-blue-800 
                opacity-25'>

            </div>
            <video src="/images/hero-1.mp4" autoPlay muted loop preload="metadata"
                className='w-[100%] h-[100%] object-cover' />
            <div className='absolute z-[100] w-[100%] h-[100%] top-[50%] left-[50%]
                -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center flex-col w-[100%] 
                    h-[100%]'>
                    <div data-aos="fade-right">
                        <h1 className='text-[25px] md:text-[35px] lg:text-[45px] 
                            mb-[1rem] md:mb-0 text-center tracking-[0.7rem] text-white
                            font-bold uppercase'>
                            Lets Enjoy The Journy
                        </h1>
                        <p className='text-[18px] md:text-[16px] text-center text-white
                            font-normal [word-spacing:5px]'>
                            Get the best prices on 2,000,000+ properties, worldwide
                        </p>
                    </div>

                    <SearchBox />

                    <a href="#_" className='rounded px-14 md:px-28 mt-[-1rem] py-2.5 
                        overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r 
                        hover:from-red-500 hover:to-red-400 text-white hover:ring-2 
                        hover:ring-offset-2 hover:ring-red-400 transition-all ease-out
                        duration-300'>
                        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all
                            duration-1000 transform translate-x-12 bg-white opacity-10
                            rotate-12 group-hover:-translate-x-40 ease'></span>
                        <span className='relative font-bold'>
                            Search
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;

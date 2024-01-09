import React from 'react';
import HotelCard from './helper/HotelCard';

function Hotels() {
    return (
        <div className='pt-[5rem] bg-gray-200 pb-[4rem]'>
            <h1 className='heading'>
                Best Hotel
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
                <div>
                    <HotelCard name="Hotel Nextus" city="Rajshahi" price="$120" reviewNum='21' image='/images/h1.png' />
                </div>
                <div>
                    <HotelCard name="Hotel Reactive" city="Dhaka" price="$170" reviewNum='37' image='/images/h2.png' />
                </div>
                <div>
                    <HotelCard name="Hotel Javascript" city="Typescript" price="$215" reviewNum='54' image='/images/h3.png' />
                </div>
                <div>
                    <HotelCard name="Hotel Html" city="Code" price="$185" reviewNum='780' image='/images/h4.png' />
                </div>
                <div>
                    <HotelCard name="Hotel Scss" city="Styles" price="$210" reviewNum='352' image='/images/h5.png' />
                </div>
                <div>
                    <HotelCard name="Hotel Php" city="Sql" price="$278" reviewNum='135' image='/images/h6.png' />
                </div>
            </div>
        </div>
    );
};

export default Hotels;

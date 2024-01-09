import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import TopDestination from '@/components/TopDestination';

const HomePage = () => {
  const [nav, setNav] = useState(false);

  const toggleNavHandle = () => {
    setNav(!nav);
  };

  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Website | Travel</title>
      </Head>
      <MobileNav nav={nav} toggleNavHandle={toggleNavHandle} />
      <Navbar toggleNavHandle={toggleNavHandle} />
      <Hero />

      <TopDestination />
    </div>
  );
};

export default HomePage;

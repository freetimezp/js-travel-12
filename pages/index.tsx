import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import TopDestination from '@/components/TopDestination';
import Hotels from '@/components/Hotels';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
      <Hotels />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

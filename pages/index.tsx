import React from 'react';
import Head from 'next/head';

import Navbar from '@/components/Navbar';

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Website | Travel</title>
      </Head>
      <Navbar />
    </div>
  );
};

export default HomePage;

import React from 'react';
import Navbar from '../Section/Navbar'
import Hero from '../Section/Hero';
import Para from '../Section/Para';
import Why from '../Section/why'
import BestSellingSection from '../Section/BestSellingSection';
import Footer from '../Section/Footer';
import Every from '../Section/every'
import Product from '../Section/product';
import Faq from '../Section/faq';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Para/>
      <Why/>
      <BestSellingSection/>
      <Every/>
      <Product/>
      <Faq/>
      <Footer/>

    </>
  );
};

export default Home;

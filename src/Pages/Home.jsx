import React, { useEffect, useState } from 'react';
import Navbar from '../Section/Navbar';
import Hero from '../Section/Hero';
import Para from "../Section/para";
import Why from '../Section/why';
import BestSellingSection from '../Section/BestSellingSection';
import Footer from '../Section/Footer';
import Every from '../Section/every';
import Product from '../Section/product';
import Faq from '../Section/faq';
import Loader from '../components/loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Hero />
      <Para />
      <Why />
      <BestSellingSection />
      <Every />
      <Product />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;

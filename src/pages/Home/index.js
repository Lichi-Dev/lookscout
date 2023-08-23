import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import OurProduct from "../../components/OurProduct";
import RedefiningProduct from "../../components/RedefiningProduct";
import RedefiningProductNew from "../../components/RedefiningProductNew";
import Customer from "../../components/Customer";
import Blog from "../../components/Blog";
import Brand from "../../components/Brand";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurProduct />
      <RedefiningProduct />
      <RedefiningProductNew />
      <Customer />
      <Blog />
      <Brand />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

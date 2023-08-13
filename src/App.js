import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurProduct from "./components/OurProduct";
import RedefiningProduct from "./components/RedefiningProduct";
import RedefiningProductNew from "./components/RedefiningProductNew";
import Customer from "./components/Customer";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-container">
          <ClimbingBoxLoader color="white" />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;

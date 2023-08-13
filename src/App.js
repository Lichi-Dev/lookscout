import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurProduct from "./components/OurProduct";
import RedefiningProduct from "./components/RedefiningProduct";
import RedefiningProductNew from "./components/RedefiningProductNew";
import Customer from "./components/Customer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurProduct />
      <RedefiningProduct />
      <RedefiningProductNew />
      <Customer />
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurProduct from "./components/OurProduct";
import RedefiningProduct from "./components/RedefiningProduct";
import RedefiningProductNew from "./components/RedefiningProductNew";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurProduct />
      <RedefiningProduct />
      <RedefiningProductNew />
    </>
  );
}

export default App;

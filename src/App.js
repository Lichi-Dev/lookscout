import "./App.css";
import { useState, useEffect, createContext } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import axios from "axios";
export const UserContext = createContext();
function App() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  const getHeading = async () => {
    try {
      const response = await axios.get(
        "https://lookscoutbackend.onrender.com/getText"
      );
      setText(response.data.text);
      console.log("Retrieved text:", text);
      // Update state or UI with the retrieved text
    } catch (error) {
      console.error("Error getting text:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    getHeading();
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-container">
          <PropagateLoader color="white" />
        </div>
      ) : (
        <UserContext.Provider value={{ text, setText }}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
          </Routes>
        </UserContext.Provider>
      )}
    </>
  );
}

export default App;

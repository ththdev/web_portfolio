import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

import Footer from "./components/footer";

function App() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    console.log("PUBLIC URL: ", process.env.PUBLIC_URL);
    console.log(process.env.NODE_ENV);
    function onResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", onResize);
  }, []);
  return (
    <div className="App">
      <div className="container-fluid" style={{ height: viewport.height }}>
        <div className="row content">
          <BrowserRouter
            basename={
              process.env.NODE_ENV === "development"
                ? "/"
                : process.env.PUBLIC_URL
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

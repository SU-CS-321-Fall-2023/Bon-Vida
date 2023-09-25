import "./App.css";
import "./bootstrap.min.css";
import Home from "./Home";
import Contact from "./contactUs";
import About from "./about";
import CPR from "./cpr";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cpr" element={<CPR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

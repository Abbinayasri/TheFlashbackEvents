import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services"; 
import About from "./components/About";
import Theme from "./components/Theme";
import Gallery from "./components/Gallery";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/theme" element={<Theme/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;

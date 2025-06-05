import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import Reach from "./pages/reach/Reach";
import Company from "./pages/company/Company";
import Navigation from "./components/menu/Navigation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reach-us" element={<Reach />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

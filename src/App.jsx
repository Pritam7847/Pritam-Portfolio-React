import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Aurora from './components/Aurora';
import './App.css';
import Hero from './components/hero';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Achievement from './components/Achievement';
import Hireme from './components/Hireme';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 -z-10 bg-once">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Foreground Content */}
        <Navbar />

        {/* Route Switch */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/hireme" element={<Hireme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PortfolioBackground from './components/PortfolioBackground';
import './App.css';
import Hero from './components/Hero';
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
        <PortfolioBackground />

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

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Project from './components/Project';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      '.welcome-message',
      { opacity: 0, y: -25, scale:0 },
      { opacity: 1, y: 0, scale: 1, duration: 1 }
    );

    const timeout = setTimeout(() => {
      gsap.to('.welcome-message', { opacity: 0, delay: 0.5, duration: 1, onComplete: () => setShowWelcome(false) });
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showWelcome ? (
        <div className="welcome-screen flex justify-center items-center h-screen bg-[#031f0c] text-white text-center p-4 flex-wrap">
          <h1 className="welcome-message text-2xl md:text-4xl lg:text-6xl font-bold text-[#e6fcee]">Hello World! Let’s Build Together.</h1>
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Works" element={<Project />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;

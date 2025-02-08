import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home'

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      '.welcome-message',
      { opacity: 0, y: -25 },
      { opacity: 1, y: 0, scale:2, duration: 1 }
    );

    const timeout = setTimeout(() => {
      gsap.to('.welcome-message', { opacity: 0, delay:0.5, duration: 1, onComplete: () => setShowWelcome(false) });
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showWelcome ? (
        <div className="welcome-screen" style={styles.welcomeScreen}>
          <h1 className="welcome-message" style={styles.welcomeMessage}>Hello World! Let’s Build Together.</h1>
        </div>
      ) : (
        <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Work" element={<Work/>} />
        <Route path="/Resume" element={<Resume/>} />
      </Routes>

    </div>
      )}
    </>
  );
};

const styles = {
  welcomeScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#031f0c',
    color: 'white',
    fontSize: '2rem',
    color:'#e6fcee'
  },
  welcomeMessage: {
    textAlign: 'center',
  },
};

export default App;

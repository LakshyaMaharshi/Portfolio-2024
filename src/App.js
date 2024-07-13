import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Work" element={<Work/>} />
      </Routes>

    </div>
  );
}

export default App;

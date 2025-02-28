import About from "../components/About";
import Intro from "../components/Intro";
import Works from "../components/Works";
import Contact from '../components/Contact';
import Project from "../components/Project";
import Education from "../components/education";
import ServicesSection from "../components/services";

import Skills from "../components/Skills";
const Home = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <Works/>
      <Education/>
      <Skills/>
      <ServicesSection/>
      <Project/>
      <Contact/>
    </div>
  )
};

export default Home

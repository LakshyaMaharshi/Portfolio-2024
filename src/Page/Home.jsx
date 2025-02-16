import About from "../components/About";
import Intro from "../components/Intro";
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
      <Education/>
      <Skills/>
      <ServicesSection/>
      <Project/>
      <Contact/>
    </div>
  )
};

export default Home

import About from "../components/About";
import Intro from "../components/Intro";
import Contact from '../components/Contact';
import Project from "../components/Project";
import Education from "../components/education";
import service_offers from "../components/services";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <service_offers/>
      <Contact/>
    </div>
  )
};

export default Home

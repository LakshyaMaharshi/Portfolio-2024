import About from "../components/About";
import Intro from "../components/Intro";
import Work from "../components/Work";
import Contact from '../components/Contact';
import Resume from "../components/Resume";

const Home = () => {
  return (
    <div>
      <Intro/>
      <About />
      <Work/>
      <Resume/>
      <Contact/>
    </div>
  )
};

export default Home

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Contact from "./Contact";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const gsapRef = useRef();
  const tableRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      // duration: 2.5,
      // x: -100,
      // opacity: 0,
      // scale: 0.9,
      // ease: "power3.out",
      // scrollTrigger: {
      //   trigger: gsapRef.current,
      //   start: "top 85%",
      //   end: "bottom 60%",
      //   scrub: 2,
      // },
    });

    gsap.from(tableRef.current,{
      // duration: 2.5,
      // y: -100,
      // opacity: 0,
      // scale: 0.9,
      // ease: "power3.out",
      // scrollTrigger: {
      //   trigger: tableRef.current,
      //   start: "top 85%",
      //   end: "bottom 60%",
      //   scrub: 2,
      // },
    })

    ScrollTrigger.refresh();
  });

  return (
    <div id="about-intro-div" className="mx-28 my-16" ref={gsapRef}>
      <h1 className="text-accentColor text-7xl font-black mb-11">about.</h1>
      <p className="text-2xl leading-9">
        I am a beginner developer, I possess a versatile skill set in frontend
        development and app creation. I am proficient in crafting dynamic web
        experiences and skilled in mobile app development. I am eager to
        contribute innovatively and grow in collaborative environments.
        Additionally, I am committed to continuous learning and growth in
        development.
      </p>
      <div className="about-table grid grid-cols-2 md:grid-cols-4 gap-6 my-12" ref={tableRef} >
        {/* Years of Coding Experience */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-5xl font-bold text-accentColor">1.5</h3>
          <p className="text-lg text-gray-700 mt-2">
            Years of Coding Experience
          </p>
        </div>

        {/* Passionate About Problem Solving */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-5xl font-bold text-accentColor">💡</h3>
          <p className="text-lg text-gray-700 mt-2">
            Passionate About Problem Solving
          </p>
        </div>

        {/* Love for Clean Code */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-5xl font-bold text-accentColor">❤️</h3>
          <p className="text-lg text-gray-700 mt-2">Love Building New Apps</p>
        </div>

        {/* Projects Completed */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-5xl font-bold text-accentColor">📊</h3>
          <p className="text-lg text-gray-700 mt-2">Enjoy Playing with Data</p>
        </div>
      </div>
    </div>
  );
};

export default About;

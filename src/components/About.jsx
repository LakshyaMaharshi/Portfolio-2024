import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Contact from "./Contact";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const gsapRef = useRef(null);
  const tableRef = useRef(null);

  // useGSAP(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(gsapRef.current, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: gsapRef.current,
  //         start: "top 85%",
  //         end: "bottom 60%",
  //         scrub: 1,
  //       },
  //     });

  //     gsap.from(tableRef.current.children, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: tableRef.current,
  //         start: "top 85%",
  //         end: "bottom 60%",
  //         scrub: 1,
  //       },
  //     });

  //     ScrollTrigger.refresh();
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <div id="about-intro-div" className="mx-28 my-16" ref={gsapRef}>
      <h1 className="text-accentColor text-6xl font-black mb-11">About Me.</h1>
      <p className="text-2xl leading-9">
        I am a beginner developer, I possess a versatile skill set in frontend
        development and app creation. I am proficient in crafting dynamic web
        experiences and skilled in mobile app development. I am eager to
        contribute innovatively and grow in collaborative environments.
        Additionally, I am committed to continuous learning and growth in
        development.
      </p>

      <div
        className="about-table grid grid-cols-2 md:grid-cols-4 gap-6 my-12 overflow-visible"
        ref={tableRef}
      >
        {/* Years of Coding Experience */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">1.5</h3>
          <p className="text-lg text-gray-700 mt-2">Years of Coding Experience</p>
        </div>

        {/* Passionate About Problem Solving */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">💡</h3>
          <p className="text-lg text-gray-700 mt-2">Passionate About Problem Solving</p>
        </div>

        {/* Love for Clean Code */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">❤️</h3>
          <p className="text-lg text-gray-700 mt-2">Love Building New Apps</p>
        </div>

        {/* Projects Completed */}
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">📊</h3>
          <p className="text-lg text-gray-700 mt-2">Enjoy Playing with Data</p>
        </div>
      </div>
    </div>
  );
};

export default About;

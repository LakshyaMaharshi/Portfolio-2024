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
      Full-Stack Developer (MERN) & Data Analyst with proven expertise in architecting enterprise-grade web solutions and driving data-informed decision making. Delivered high-performance applications using React.js, Node.js, and Python, achieving 98% client satisfaction. Championed innovative technical solutions that transformed business operations and user experiences.
      </p>

      <div
        className="about-table grid grid-cols-2 md:grid-cols-4 gap-6 my-20 overflow-visible"
        ref={tableRef}
      >
        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">2.5</h3>
          <p className="text-lg text-gray-700 mt-2">Years of Coding Experience</p>
        </div>

        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">💡</h3>
          <p className="text-lg text-gray-700 mt-2">Passionate About Problem Solving</p>
        </div>

        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">❤️</h3>
          <p className="text-lg text-gray-700 mt-2">Love To Listening Song</p>
        </div>

        <div className="text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <h3 className="text-5xl font-bold text-accentColor">📊</h3>
          <p className="text-lg text-gray-700 mt-2">Enjoy Playing with Data</p>
        </div>
      </div>
    </div>
  );
};

export default About;

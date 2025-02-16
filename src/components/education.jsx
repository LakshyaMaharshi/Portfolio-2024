import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRefs = useRef([]); // Array to store refs

  useEffect(() => {
    gsap.fromTo(
      sectionRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3, // Each div appears after 0.3s
        scrollTrigger: {
          trigger: sectionRefs.current[0], // Trigger when the first div appears
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="mx-28 my-48 flex flex-col">
      <h1 className="text-accentColor text-6xl font-black mb-11">Education.</h1>
      <div className="border-l-8 border-blue-500 pl-9 py-14 space-y-8 p-6 bg-[--primary] rounded-2xl ">
        {[
          {
            title: "BACHELOR OF TECHNOLOGY IN CSE",
            year: "2022 - 2026",
            university: "Poornima University",
            Score: "8.8/10 CGPA",
          },
          {
            title: "JEE Mains Examination",
            year: "2021 - 2022",
            university: "Poornima University",
            Score: "94.53 Percentile",
          },
          {
            title: " Senior Secondary (12th)",
            year: "2019 - 2022",
            university: "Poornima University",
            Score: "91%",
          },
        ].map((edu, index) => (
          <div
            key={index}
            className="relative group"
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="ml-6">
              <div className="flex justify-between space-x-2">
                <span className="text-xl font-bold text-black group-hover:text-blue-500 transition-colors duration-300">
                  {edu.title}
                </span>
                <span className="italic font-light text-black ">Score: {edu.Score}</span>
              </div>
              <p className="text-gray-500">{edu.year}</p>
              <p className="text-gray-700">{edu.university}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

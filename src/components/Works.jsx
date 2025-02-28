import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const listItems = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      listItems.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3, // Each div appears after 0.3s
        scrollTrigger: {
          trigger: listItems.current[0], // Trigger when the first div appears
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="mx-4 md:mx-28 my-16 md:my-48 flex flex-col">
      <h1 className="text-accentColor text-4xl md:text-6xl font-black mb-11">Work Experience.</h1>
      <div className="border-l-4 md:border-l-8 border-blue-500 pl-4 md:pl-9 py-14 space-y-8 p-6 bg-[--primary] rounded-2xl">
        {[
          {
            title: "June - Sept. (2024) {Frontend Developer Intern}",
            description:
              "As a Stipend-based Frontend Developer Intern at JPR Systems Pvt. Ltd., I leveraged my skills in React and React Native to create dynamic, responsive user interfaces. I specialized in utilizing GSAP and Three.js for advanced animations, enhancing user engagement and experience.",
          },
          {
            title: "2023 - Present {Freelancing}",
            description:
              "I am actively engaged in freelancing to enhance and refine my skills. By taking on diverse projects, I continuously challenge myself to apply and expand my expertise in web development.",
          },
          {
            title: "2023 - Present {Open Source Contribution}",
            description:
              "I am actively contributing to open-source projects to enhance my skills. This involvement allows me to collaborate with a global community of developers, tackle real-world problems, and gain exposure to diverse coding practices.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group"
            ref={(el) => (listItems.current[index] = el)}
          >
            <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="ml-6">
              <div className="flex justify-between space-x-2">
                <span className="text-lg md:text-xl font-bold text-black group-hover:text-blue-500 transition-colors duration-300">
                  {item.title}
                </span>
              </div>
              <p className="text-gray-500 text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
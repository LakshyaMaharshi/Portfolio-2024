import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Application Development",
    description: "Building dynamic and responsive web applications using MERN stack.",
  },
  {
    title: "Frontend Development",
    description: "Crafting modern UI/UX using React, Tailwind, GSAP, and Three.js.",
  },
  {
    title: "Backend Development",
    description: "Developing RESTful APIs and microservices with Node.js and Express.js.",
  },
  {
    title: "Data Visualization",
    description: "Creating interactive dashboards with Tableau & Power BI.",
  },
  {
    title: "Predictive Modeling",
    description: "Building ML models for forecasting and classification.",
  },
  {
    title: "SQL & NoSQL Database Management",
    description: "Optimizing queries and managing relational databases.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="services" className="py-16 bg-[#031f0c]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-11 text-accentColor text-center">Services I Provide.</h2>
        <div ref={sectionRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="overflow-visible">
              <div
                className="p-6 bg-[--primary] rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_15px_#2ea1e9] flex flex-col justify-center items-center"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[--accent] text-center">{service.title}</h3>
                <p className="text-sm md:text-base lg:text-lg text-[--background] text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

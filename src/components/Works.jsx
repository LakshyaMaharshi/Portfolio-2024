import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Works = ( )=> {
    gsap.registerPlugin(ScrollTrigger);
    const gsapRef = useRef()
    const listItems = useRef([])
    useGSAP(()=>{
        gsap.from(listItems.current, {
            opacity: 0,
            x: -50,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gsapRef.current,
              start: "top 80%",
              end: "bottom 60%",
            },
          });
          ScrollTrigger.refresh();
    })
    return (
    <div className="ml-28 my-24 " ref={listItems}>
      <ul className="list-disc">
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
          {
            title: "2021 - 2022",
            description:
              "Achieving a 94.76 percentile in JEE Main is a significant accomplishment, demonstrating a high level of proficiency in mathematics, physics, and chemistry.",
          },
        ].map((item, index) => (
          <li className="my-16" key={index} ref={(el) => (listItems.current[index] = el)}>
            <h4 className="mb-4">{item.title}</h4>
            <p className="ml-4">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default Works;
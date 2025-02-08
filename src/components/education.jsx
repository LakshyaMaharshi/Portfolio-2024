import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  //   useGSAP(() => {
  //     gsap.from(
  //       sectionRef.current,
  //       { y: -100, opacity: 0, scale: 0.9 }, // Initial State
  //       {
  //         y: 0,
  //         opacity: 1,
  //         scale: 1,
  //         duration: 2.5,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 85%",
  //           end: "bottom 60%",
  //           scrub: 2,
  //         },
  //       }
  //     );
  //   },);

  return (
    <div className="mx-28 my-16" ref={sectionRef}>
      <h1 className="text-accentColor text-7xl font-black mb-11">Education.</h1>
      <div className="border-l-4 border-blue-500 ml-14 pl-9 space-y-8">
        {/* Bachelor of Technology */}
        <div className="relative">
          <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-blue-700">
              BACHELOR OF TECHNOLOGY
            </h3>
            <p className="text-gray-500">2019 - 2023</p>
            <p className="text-gray-700">
              Poornima University
            </p>
            <p>
            <strong>Branch:</strong> Computer Science and Engineering
          </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-blue-700">
              BACHELOR OF TECHNOLOGY
            </h3>
            <p className="text-gray-500">2019 - 2023</p>
            <p className="text-gray-700">
              Poornima University
            </p>
            <p>
            <strong>Branch:</strong> Computer Science and Engineering
          </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-blue-700">
              BACHELOR OF TECHNOLOGY
            </h3>
            <p className="text-gray-500">2019 - 2023</p>
            <p className="text-gray-700">
              Poornima University
            </p>
            <p>
            <strong>Branch:</strong> Computer Science and Engineering
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

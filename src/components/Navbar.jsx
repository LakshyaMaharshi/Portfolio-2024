import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.from(gsapRef.current, {
      y: -50,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
      duration: 2.5,
    });
  }, []);

  return (
    <div className="w-full flex justify-between mt-4 px-4 md:px-8 lg:px-16" ref={gsapRef}>
      <h1
        className="font-black text-2xl antialiased"
        style={{ fontFamily: "Playwrite CU", fontStyle: "normal" }}
      >
        Lakshya Maharshi
      </h1>
      <div className="flex justify-evenly w-1/2 text-xl hidden md:flex">
        <NavLink to="/" className="hover:text-blue-500">
          Home
        </NavLink>
        <NavLink to="/About" className="hover:text-blue-500">
          About
        </NavLink>
        <NavLink to="/Works" className="hover:text-blue-500">
          Work
        </NavLink>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-500 focus:outline-none"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className="hidden md:hidden flex flex-col items-center w-full mt-4">
        <NavLink to="/" className="py-2 hover:text-blue-500">
          Home
        </NavLink>
        <NavLink to="/About" className="py-2 hover:text-blue-500">
          About
        </NavLink>
        <NavLink to="/Works" className="py-2 hover:text-blue-500">
          Work
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

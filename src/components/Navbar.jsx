import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const gsapRef = useRef()
  useGSAP(() => {
    gsap.from(gsapRef.current,{
      y:-50,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
      duration:2.5,
    })
  },[])

  return (
    <div className=" w-full flex justify-between mt-4"ref={gsapRef} >
      <h1 className="relative left-32 font-black text-2xl antialiased"
        style={{ fontFamily: "Playwrite CU", fontStyle: "normal" }}>
        Lakshya Maharshi
      </h1>
      <div className="flex justify-evenly w-1/2 text-xl " >
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/About" >About</NavLink>
        <NavLink to="/Works" >Work</NavLink>
      </div>
    </div>
  )
};

export default Navbar

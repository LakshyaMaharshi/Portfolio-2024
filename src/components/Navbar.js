import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" w-full flex justify-between mt-4" >
      <h1 className="relative left-32 font-black text-2xl antialiased"
        style={{ fontFamily: "Playwrite CU", fontStyle: "normal" }}>
        Lakshya Maharshi
      </h1>
      <div className="flex justify-evenly w-1/2" >
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/About" >About</NavLink>
        <NavLink to="/Work" >Work</NavLink>
      </div>
    </div>
  )
};

export default Navbar

import contactImg from "../assets/Img/contactImg.png";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Contact = () => {
  const gsapRef = useRef();
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(()=>{
    gsap.from(gsapRef.current, { 
      // duration: 1,
      // x: -100, 
      // opacity: 0,
      // ease: "elastic.inOut",
      // scrollTrigger:{
      //   trigger: gsapRef.current,
      //   scroller:"body",
      //   // markers:true,
      //   start: "top 80%",
      //   end: "bottom 20%",
      //   scrub:2
      // }
    });
  })
  return (
    <div className="mx-28 my-16" ref={gsapRef}>
      <h1 className="text-accentColor text-7xl font-black mb-11 " >Contact.</h1>
      <div className="flex h-80 gap-10 ">
        <img className="rounded-2xl"  style={{ transform: "rotateY(180deg)" }} src={contactImg} alt="" />
        <div className="flex flex-col justify-around items-center " >
          <p className="text-xl leading-9 " >
          Feel free to reach out! Whether you have a project in mind or just want to connect, I'm open to new opportunities and collaborations. Contact me via Social media handles form below. I look forward to discussing how we can work together.
          </p>
          <div className=" social-media flex gap-5  w-full justify-around  " >
            <a className="hover:text-blue-700	 delay-100 "  href="#"> {<SiLinkedin className="inline mb-1 "  />} LinkedIn</a>
            <a className="hover:text-fuchsia-700	 delay-100 " href="#"> <SiInstagram className="inline mb-1 " /> Instagram</a>
            <a className="hover:text-yellow-400		 delay-100 " href="#"><SiGithub className="inline mb-1 " /> GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Contact;

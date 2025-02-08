import { useState } from "react";
import BharatBazaar from "../Img/BharatBazaar.png";
import GyanYatriLogin from "../Img/GyanYatriLogin.png";
import GyanYatriSignup from "../Img/GyanYatriSignup.png";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Project = () => {

  const images = [GyanYatriLogin, GyanYatriSignup]
  const [currentImg, setImg] = useState(images[0]);
  const [counter, setCounter] = useState(0)

  gsap.registerPlugin(ScrollTrigger) 
  const gsapRef = useRef();
  const gsapRef2 = useRef();
  
  useGSAP(() => {
    gsap.from(gsapRef.current, {
      // duration: 3,
      // x: -150,
      // opacity: 0,
      // ease: "elastic.out(1, 0.3)",
      // scrollTrigger: {
      //   trigger: gsapRef.current,
      //   start: "top 80%",
      //   end: "bottom 60%",
      //   // markers: true,
      //   scrub:2,
      // },
    },
    gsap.from(gsapRef2.current, {
      // x: -150,
      // duration: 3,
      // opacity: 0,
      // ease: "elastic.out(1, 0.3)",
      // scrollTrigger: {
      //   trigger: gsapRef2.current,
      //   start: "top 40%",
      //   // end: "bottom 60%",
      //   // markers: true,
      // }
    })
  );

    
  
    ScrollTrigger.refresh(); 
  });


  function leftHandler(){ 
    if (counter === 0) {
      setCounter(images.length-1);
      setImg(images[counter]);
    }else {
      setCounter(counter - 1);
      setImg(images[counter]);
    }
  }

  function rightHandler(){
    if (counter === images.length - 1) {
      setCounter(0);
      setImg(images[counter]);
    }else {
      setCounter(counter + 1);
      setImg(images[counter]);
    }
  }


  return (
    <div className="mx-28 my-16 relative pb-14 "ref={gsapRef} >
      <h1 className="text-accentColor text-7xl font-black mb-11 ">Projects.</h1>
      <p className="text-2xl leading-9 ">
        I’ve developed over 100 projects, enhancing my skills in various
        technologies and techniques. This diverse portfolio includes everything
        from simple web apps to complex interfaces, showcasing my growth in
        React, React Native, GSAP, and Three.js, and my dedication to
        innovation.
      </p>

      <div className="workCollection flex mt-10 gap-10" ref={gsapRef2}>
        <div className="container1">
          <img src={BharatBazaar} alt="" />
          <h2 className="italic text-xl text-yellow-400 mt-10 ">
            Bharat Bazaar
          </h2>
          <h5 className="text-sm mb-3 text-right ">Dec. 2023</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            magni optio cumque ea quia deserunt vitae ipsam pariatur sequi
            consectetur numquam amet, sunt voluptatibus consequatur velit
            debitis quae commodi nemo?
          </p>
        </div>

        <div className="container2">
          <div>
            <img src={currentImg} alt="" />
            <div className=" mx-auto my-3 w-1/4 align-middle flex justify-around " >
            <button onClick={leftHandler} ><FaAngleLeft /></button>
            <button onClick={rightHandler} ><FaAngleRight /></button>
            </div>
            {/* <img src={GyanYatriSignup} alt="" /> */}
          </div>
          <h2 className="italic text-xl text-yellow-400 mt-3 ">
            Other project
          </h2>
          <h5 className="text-sm mb-3 text-right ">March. 2024</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni
            at deleniti modi voluptates id fuga numquam reiciendis quaerat
            sequi! Repellat repudiandae in officia exercitationem? Dignissimos
            praesentium incidunt unde dolorem.
          </p>
        </div>
      </div>
      <a className="absolute right-2 bottom-1 italic text-blue-400 " href="">
        more project ...
      </a>
    </div>
  );
};

export default Project;

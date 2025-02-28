import profileImg from '../assets/Img/profileImg.jpg';
import './Intro.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import TypingAnimation from './TypingAnimation';

const Intro = () => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.from(gsapRef.current, {
      duration: 2,
      opacity: 0.1,
      y: -100,
      ease: 'back',
      yoyo: true,
      transformOrigin: 'center center',
    });
  });

  return (
    <div className="mt-6" ref={gsapRef}>
      <div className="introDiv flex flex-col md:flex-row justify-around w-full h-auto md:h-screen items-center p-4">
        <div className="w-full md:w-1/3 h-auto flex flex-col justify-evenly items-center mb-10 md:mb-0">
          <div className="text-div text-center md:text-left">
            <h4 className="mx-3 text-2xl md:text-3xl">Hello, I'm Lakshya a</h4>
            <TypingAnimation />
            <h4 className="mx-3 text-xl md:text-2xl mt-3">
              At <span className="text-orange-600">In</span>d<span className="text-lime-600">ia</span>
            </h4>
          </div>
          <a
            href="/Lakshya_maharshi_CV.pdf"
            download
            className="resume text-center w-2/3 md:w-1/3 mt-10 border-solid border-2 rounded-md text-lg md:text-xl font-semibold py-2"
          >
            Resume
          </a>
        </div>
        <div className="Image-div w-full md:w-1/3 h-auto text-center">
          <img
            src={profileImg}
            alt="Profile"
            className="profileImg w-3/4 md:w-full object-cover rounded-3xl inline-block"
            style={{ objectPosition: '50% 10%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

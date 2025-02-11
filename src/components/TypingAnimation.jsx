import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypingAnimation = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const timeoutRef = useRef(null); 

  useEffect(() => {
    if (!textRef.current || !cursorRef.current) return; 

    const words = ["Programmer", "Web Developer", "Data Analyst"];
    let currentWordIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const type = () => {
      if (!textRef.current) return; 

      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      } else {
        currentText = currentWord.substring(0, currentText.length + 1);
      }

      textRef.current.textContent = currentText;

      let typeSpeed = 200;
      if (isDeleting) {
        typeSpeed /= 3;
      }

      if (!isDeleting && currentText === currentWord) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }

      timeoutRef.current = setTimeout(type, typeSpeed);
    };

    type();

    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
    });

    // Cleanup function to stop timeout and GSAP animation
    return () => {
      clearTimeout(timeoutRef.current); 
      gsap.killTweensOf(cursorRef.current);
    };
  }, []);

  return (
    <div className='text-5xl my-2 font-bold underline '>
      <span ref={textRef} className="mr-2"></span>
      <span ref={cursorRef} className="cursor">|</span>
    </div>
  );
};

export default TypingAnimation;

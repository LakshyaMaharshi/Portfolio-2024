import profileImg from '../Img/profileImg.jpg'
import './Intro.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react';
import TypingAnimation from './TypingAnimation';
const Intro = () => {
  const gsapRef = useRef();
  useGSAP(() =>{
    gsap.from(gsapRef.current,{
      duration: 2,
      opacity:0.1,
      y: -100,
      ease: 'back',
      yoyo: true,
      transformOrigin: 'center center'
    })
  })
    return (
    <div className='mt-10' ref={gsapRef} >
      <div className="introDiv flex justify-around w-dvw h-dvh items-center ">
        <div className='w-1/3 h-auto  flex flex-col justify-evenly items-center ' >

          <div className="text-div "  >
            <h4 className='mx-3 text-3xl' >Hello, I'm Lakshya a</h4>
            <TypingAnimation/>
            <h4 className='mx-3 text-2xl mt-3 ' >At <span className='text-orange-600' >In</span>d<span className='text-lime-600	' >ia</span> </h4>
          </div>

          <a href="#" target='_blank' className='resume text-center w-1/3 mt-10 border-solid border-2 rounded-md text-xl font-semibold py-1' >Resume</a>

        </div>


        <div className="Image-div w-1/3 h-auto text-center" >
          <img src={profileImg} alt="" className='profileImg w-3/4 object-cover rounded-3xl inline-block ' style={{ objectPosition: '50% 10%' }}  />
        </div>


      </div>
    </div>
  )
};

export default Intro

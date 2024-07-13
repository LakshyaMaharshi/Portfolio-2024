import profileImg from '../Img/profileImg.jpg'
import './Intro.css'
const Intro = () => {
  return (
    <div className='mt-10'  >
      <div className="introDiv flex justify-around w-dvw h-dvh items-center ">
        <div className='w-1/3 h-auto  flex flex-col justify-evenly items-center ' >

          <div className="text-div "  >
            <h4 className='mx-3 text-3xl' >Hello, I'm Lakshya a</h4>
            <h1 className='text-7xl my-2 font-extrabold underline ' >Developer</h1>
            <h4 className='mx-3 text-2xl mt-3 ' >At <span className='text-orange-600' >In</span>d<span className='text-lime-600	' >ia</span> </h4>
          </div>

          <button className='resume relative left-32 w-1/3 mt-10 border-solid border-2 rounded-md text-2xl font-semibold py-1 ' >Resume</button>

        </div>


        <div className="Image-div w-1/3 h-auto text-center " >
          <img src={profileImg} alt="" className='profileImg w-3/4 object-cover rounded-3xl inline-block ' style={{ objectPosition: '50% 10%' }}  />
        </div>


      </div>
    </div>
  )
};

export default Intro

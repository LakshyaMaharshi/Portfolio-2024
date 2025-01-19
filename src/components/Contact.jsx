import contactImg from "../Img/contactImg.png";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
const Contact = () => {
  return (
    <div className="mx-28 my-16">
      <h1 className="text-accentColor text-7xl font-black mb-11 " >contact.</h1>
      <div className="flex h-80 gap-10 ">
        <img className="rounded-2xl"  style={{ transform: "rotateY(180deg)" }} src={contactImg} alt="" />
        <div className="flex flex-col justify-around items-center " >
          <p className="text-xl leading-9 " >
          Feel free to reach out! Whether you have a project in mind or just want to connect, I'm open to new opportunities and collaborations. Contact me via Social media handles form below. I look forward to discussing how we can work together.
          </p>
          <div className="flex gap-5  w-full justify-around  " >
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

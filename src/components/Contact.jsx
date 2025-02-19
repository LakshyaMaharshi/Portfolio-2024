import contactImg from "../assets/Img/contactImg.png";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Contact = () => {
  const gsapRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      // Add animations here if needed
    });
  });

  return (
    <div className="mx-28 my-16" ref={gsapRef}>
      <h1 className="text-accentColor text-7xl font-black mb-11">Contact.</h1>
      <div className="flex h-80 gap-10">
        <img
          className="rounded-2xl"
          style={{ transform: "rotateY(180deg)" }}
          src={contactImg}
          alt="Contact"
        />
        <div className="flex flex-col justify-around items-center">
          <p className="text-xl leading-9">
            Feel free to reach out! Whether you have a project in mind or just
            want to connect, I'm open to new opportunities and collaborations.
            Contact me via social media handles below. I look forward to
            discussing how we can work together.
          </p>
          <div className="social-media flex gap-5 w-full justify-around">
            <a
              className="hover:text-blue-700 delay-100"
              href="https://www.linkedin.com/in/lakshya-maharshi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="inline mb-1" /> LinkedIn
            </a>
            <a
              className="hover:text-fuchsia-700 delay-100"
              href="https://www.instagram.com/mai_lakshya_hoon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="inline mb-1" /> Instagram
            </a>
            <a
              className="hover:text-yellow-400 delay-100"
              href="https://github.com/LakshyaMaharshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="inline mb-1" /> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer bg-[--background] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <div className="text-center mb-12">
            <h2 className="text-xl font-semibold text-[--primary] uppercase tracking-wide mb-4">
              About This Portfolio
            </h2>
            <p className="text-lg leading-7 max-w-3xl mx-auto text-[--text]">
              This portfolio represents my <b>journey, growth, and passion</b>{" "}
              for web development. It showcases my skills and projects while
              offering an <b>interactive and engaging user experience</b>.
              <br />
              <br />
              Built with <b>React, Tailwind CSS, and GSAP</b>, it ensures a
              modern, responsive, and visually appealing interface. Overcoming
              various challenges, from UI/UX improvements to implementing
              dynamic animations, has been a valuable learning experience.
              <br />
              <br />
              I’m excited to share this work with you. Thank you for visiting!
            </p>
          </div>

          {/* Open Source Section */}
          <div className="text-center mb-12 bg-[--secondary] p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-[--primary] uppercase tracking-wide mb-4">
              Open Source & Contributions
            </h2>
            <p className="text-lg leading-7 max-w-3xl mx-auto text-[--text]">
              This project is <b>open source</b>. If you have suggestions,
              ideas, or improvements, feel free to
              <b> raise an issue</b> or <b>submit a pull request</b>. Your
              contributions are welcome!
              <br />
              <br />
              ⭐ If you like this project, consider giving it a star on GitHub!
              <br />
              <br />
              <div className="flex justify-center ">
                <a
                  href="https://github.com/LakshyaMaharshi/portfolio-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-6 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             hover:scale-105 hover:shadow-lg flex items-center justify-center group w-64"
                >
                  {/* Default Text */}
                  <span className="group-hover:opacity-0 transition-opacity duration-300">
                    Visit GitHub Repository
                  </span>

                  {/* GitHub Logo (Visible on Hover) */}
                  <svg
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.113.793-.261.793-.577v-2.255c-3.338.724-4.043-1.416-4.043-1.416-.546-1.387-1.334-1.756-1.334-1.756-1.091-.745.083-.73.083-.73 1.205.085 1.84 1.239 1.84 1.239 1.07 1.832 2.807 1.303 3.49.997.107-.776.418-1.303.76-1.603-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.123-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.956-.265 1.983-.398 3.004-.403 1.02.005 2.047.138 3.004.403 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.24 2.872.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.608-2.803 5.624-5.475 5.922.43.372.813 1.104.813 2.224v3.293c0 .319.192.694.8.577C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </p>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-6 text-center flex justify-center gap-10">
            <span className="text-sm text-gray-500">
              Designed & Developed by <b>Lakshya Maharshi</b>
            </span>
            <span className="text-sm text-gray-500">
              © 2024 Lakshya Maharshi. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

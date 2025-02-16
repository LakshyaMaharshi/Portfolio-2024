import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  frontend: [

    { skill: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { skill: 'HTML', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { skill: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { skill: 'Tailwind CSS', icon: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { skill: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
  ],
  backend: [
    { skill: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { skill: 'Express.js', icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
    { skill: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { skill: 'SQL', icon: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg' },
    { skill: 'REST APIs', icon: 'https://cdn.worldvectorlogo.com/logos/api.svg' },
  ],
  dataAnalysis: [
    { skill: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { skill: 'Pandas', icon: 'https://cdn.worldvectorlogo.com/logos/pandas-2.svg' },
    { skill: 'NumPy', icon: 'https://cdn.worldvectorlogo.com/logos/numpy-2.svg' },
    { skill: 'Data Visualization', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
    { skill: 'Matplotlib', icon: 'https://cdn.worldvectorlogo.com/logos/matplotlib.svg' },
  ],
  programmingLanguages: [
    { skill: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    { skill: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { skill: 'Java', icon: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
    { skill: 'C++', icon: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
    { skill: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
  ],
  tools: [
    { skill: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
    { skill: 'VS Code', icon: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg' },
    { skill: 'Docker', icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
    { skill: 'Postman', icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
    { skill: 'Figma', icon: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg' },
  ],
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(skillsData)[0]);
  const skillCardsRef = useRef([]);

  useEffect(() => {
    skillCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });
  }, [activeTab]);

  // Hover effect for skill cards
  const handleHover = (index) => {
    gsap.to(skillCardsRef.current[index], {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleHoverExit = (index) => {
    gsap.to(skillCardsRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div className="mx-28 my-48 max-w-6xl space-y-6">
      <h1 className="text-accentColor text-6xl font-black mb-11">Skills.</h1>
      {/* Tabs */}
      <div className="flex content-center justify-center space-x-4 overflow-x-auto py-10 ">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`flex-shrink-0 ml-5 px-4 py-2 text-lg font-medium rounded-lg transition-all  ${
              activeTab === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:shadow-[var(--secondary)_0px_0px_10px_3px] transition-all transform hover:scale-105 cursor-pointer'
            }`}
          >
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="about-table grid grid-cols-2 md:grid-cols-4 gap-6 my-12 overflow-visible">
        
        {skillsData[activeTab].map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillCardsRef.current[index] = el)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHoverExit(index)}
            className="flex flex-col items-center text-center p-6 bg-[--primary] rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer  text-blue-600 hover:text-purple-800 duration-300 "
          >
            <img src={skill.icon} alt={skill.skill} className="w-12 h-12 mb-2" />
            <span className="text-xl font-medium text-center">{skill.skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
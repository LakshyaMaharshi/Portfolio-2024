const Resume = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center">RESUME</h1>
        <p className="text-center italic text-gray-600 mt-2">
          "It's not what you achieve, it's what you overcome. That's what defines your career." - Carlton Fisk
        </p>
  
        {/* Summary Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>
          <div className="border-l-4 border-blue-500 pl-4 mt-2">
            <h3 className="text-xl font-bold text-blue-700">SHUBHAM KUMAR JAYSWAL</h3>
            <p className="text-gray-600">
              Innovative and Self-motivated Programmer, Tech enthusiast, Web Developer, and App Developer.
            </p>
            <ul className="list-none mt-2 text-gray-700">
              <li>📍 S.V.N.I.T, Surat</li>
              <li>📞 +91-9471241043</li>
              <li>📧 sk662516@gmail.com</li>
            </ul>
          </div>
        </section>
  
        {/* Education Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
          <div className="border-l-4 border-blue-500 pl-4 mt-2">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-blue-700">BACHELOR OF TECHNOLOGY</h3>
              <p className="text-gray-500">2019 - 2023</p>
              <p className="text-gray-700">Sardar Vallabhbhai National Institute of Technology, Surat, IN</p>
              <p><strong>Branch:</strong> Computer Science and Engineering</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700">INTERMEDIATE</h3>
              <p className="text-gray-500">2016 - 2018</p>
              <p className="text-gray-700">+2 High School-Kishanpur, Supaul, Bihar, IN</p>
              <p><strong>Subjects:</strong> PCM</p>
            </div>
          </div>
        </section>
  
        {/* Experience Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
          <div className="border-l-4 border-blue-500 pl-4 mt-2">
            {/* Project Intern */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-blue-700">PROJECT INTERN</h3>
              <p className="text-gray-500">May 2022 - July 2022</p>
              <p className="text-gray-700">
                Collaborated with a team of 3 interns to design the containerized environment for an existing Jersey-based project. Implemented auto-scaling, metrics visualization, and end-to-end testing.
              </p>
              <p><strong>Tech Stack:</strong> Jersey, Tomcat Server, Docker, Kubernetes, Prometheus, Alert Manager, Grafana</p>
            </div>
  
            {/* Competitive Programmer */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-blue-700">COMPETITIVE PROGRAMMER</h3>
              <p className="text-gray-500">2019 - Present</p>
              <p className="text-gray-700">Participated in many programming contests.</p>
            </div>
  
            {/* Open Source Contributor */}
            <div>
              <h3 className="text-lg font-bold text-blue-700">OPEN SOURCE CONTRIBUTOR</h3>
              <p className="text-gray-500">2019 - Present</p>
              <p className="text-gray-700">Contributed to GitHub projects and participated in Hacktoberfest.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Resume;
  
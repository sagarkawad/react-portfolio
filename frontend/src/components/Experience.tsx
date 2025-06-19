import React from 'react';
import { BriefcaseIcon } from 'lucide-react';

// Simple fade-in animation component
const FadeInView = ({ children, delay = 0 }) => {
  return (
    <div 
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-gradient-to-br from-white to-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
        <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">

              <BriefcaseIcon className="w-8 h-8 text-blue-600"/>
            </div>
            <h1 className="py-2 text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
            Past Work
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            </div>

        {/* Experience Cards */}
        <div className="space-y-12 lg:space-y-16">
          {/* First Experience */}
          <FadeInView>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="mb-6 lg:mb-0">
                    <h2 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-2">
                      Full-Stack Engineering Intern
                    </h2>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      Synaptechverse
                    </h3>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Jan 2025 - Present 
                    </div>
                   
                  </div>
                  <div className="hidden lg:flex w-32 h-16 bg-gradient-to-r  from-green-100 to-green-200 rounded-lg items-center justify-center">
                    <span className="text-green-700 font-semibold text-sm h-full flex items-center justify-center leading-none">Ongoing</span>
                  </div>
                 
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  During my internship at <span className="font-semibold text-blue-600">Synaptechverse</span>, I worked as a full-stack engineer, collaborating with cross-functional teams to design, develop, and deploy scalable web applications. My role involved both frontend and backend development, ensuring seamless user experiences and robust system performance.
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Built and optimized responsive user interfaces using <span className="font-medium text-blue-600">React.js</span> and <span className="font-medium text-blue-600">Tailwind CSS</span>.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Developed RESTful APIs and backend services with <span className="font-medium text-blue-600">Node.js</span> and <span className="font-medium text-blue-600">Express.js</span>.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Integrated <span className="font-medium text-blue-600">MongoDB</span> for efficient data storage and retrieval.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Collaborated in Agile sprints, participated in code reviews, and contributed to architectural decisions.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Enhanced application performance and user experience through continuous testing and optimization.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Agile'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Second Experience */}
          <FadeInView delay={0.2}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="mb-6 lg:mb-0">
                    <h2 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-2">
                      Production Support Engineer
                    </h2>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      LTI Mindtree
                    </h3>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      June 2023 - December 2023
                    </div>
                  </div>
                  <div className="hidden lg:flex w-32 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <span className="text-blue-700 font-semibold text-sm">6 Months</span>
                  </div>
                 
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                  At <span className="font-semibold text-blue-600">LTI Mindtree</span>, I worked as a Production Support Engineer, ensuring the reliability and smooth operation of critical business applications. My role focused on monitoring, troubleshooting, and resolving production issues to minimize downtime and maintain high service quality.
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Monitored application health and responded to incidents in real-time to ensure system uptime.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Diagnosed and resolved production issues, collaborating with development and infrastructure teams.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Automated routine support tasks and improved monitoring using tools like <span className="font-medium text-blue-600">SQL</span>, <span className="font-medium text-blue-600">Linux</span>, and <span className="font-medium text-blue-600">Shell Scripting</span>.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Provided root cause analysis and documented solutions to prevent recurring issues.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4"></div>
                        <span className="text-gray-700">Supported deployment activities and participated in on-call rotations.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {['SQL', 'Linux', 'Shell Scripting', 'Monitoring', 'Incident Management'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Experience;
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Eye, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Post your SaaS",
    description: "A platform for indie hackers to post their products. Currently in development phase and closed source. Will make it live and open-source soon.",
    image: "https://i.pinimg.com/736x/a0/e6/d3/a0e6d34297c51272111896a1f4d2becb.jpg",
    technologies: ["React", "Supabase", "Media Store"],
    githubUrl: undefined,
    liveUrl: undefined,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    title: 'Perspective AI',
    description: 'A platform where you can break through the echo chambers of thought processes.',
    image: 'https://i.pinimg.com/736x/fc/1e/4b/fc1e4bf3b1d22fd8416cbd243247f619.jpg',
    technologies: ['NextJS', 'Python', 'Langchain & Langgraph', "FastAPI", 'Tailwind CSS', "OpenAI"],
    githubUrl: 'https://github.com/sagarkawad/Perspective-AI',
    liveUrl: undefined,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  // {
  //   title: 'Online Bicycle Store',
  //   description: 'Online bicycle store to buy belt bicycles online',
  //   image: 'https://i.pinimg.com/736x/ec/6e/0e/ec6e0e48c37584db24040141d2cadd82.jpg',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', "Express"],
  //   githubUrl: 'https://github.com/sagarkawad/blue-bikes',
  // },
  // {
  //   title: 'Blue-Bikes Android App',
  //   description: 'A mobile-first application for dealers to place bicycle orders to the manufacturer',
  //   image: 'https://i.pinimg.com/736x/6c/c6/de/6cc6de7a0963a15702b1f17c94fd0d90.jpg',
  //   technologies: ['React Native', 'Supabase', "Recoil"],
  //   githubUrl: 'https://github.com/sagarkawad/bb-mobileapp',
  // },
  // {
  //   title: 'React DashBoard',
  //   description: 'A dashoard made using React Ts for the admin to manage cycle orders.',
  //   image: 'https://i.pinimg.com/736x/f3/a5/85/f3a585bd3e8150a017d789de6edd55ad.jpg',
  //   technologies: ['React', 'Supabase'],
  //   githubUrl: 'https://github.com/sagarkawad/react-dashboard',
  // },
  // {
  //   title: 'Minimalistic Personal Notion Web App',
  //   description: 'A minimalistic polished task-list application which makes use of the browser local storage to save the tasks',
  //   image: 'https://i.pinimg.com/736x/76/90/02/769002c3bd6e63da95197881036711b7.jpg',
  //   technologies: ['React', 'Tailwind CSS'],
  //   githubUrl: 'https://github.com/sagarkawad/notes',
  //   liveUrl: 'https://mypersonalnotesapp.netlify.app/',
  // },
  // {
  //   title: 'Expense Visualiser',
  //   description: 'A minimalistic expense visualer to track expenses in a graphical format',
  //   image: 'https://i.pinimg.com/736x/5d/ff/91/5dff91323778b48c95dca41c811a85af.jpg',
  //   technologies: ['React', 'Chart.js'],
  //   githubUrl: 'https://github.com/sagarkawad/spend-calculator',
  //   liveUrl: 'https://spend-calculator.netlify.app/',
  // },
  // {
  //   title: 'Review Sentiment Analysis',
  //   description: 'A python based application which scrapes data from book my show to calculate the user based rating of the movie. It creates an excel file, noting all the user reviews and finally calculating the final score of the movie',
  //   image: 'https://i.pinimg.com/736x/2c/f1/85/2cf185d739d4be85b1dd024efb2fb796.jpg',
  //   technologies: ['Python', 'Selenium', "Tkinter", "Natural Language Processing Toolkit"],
  //   githubUrl: 'https://github.com/sagarkawad/bookmyshow',
  //   liveUrl: 'https://youtu.be/a1jlVGdpMtY?si=AhI-bEenDhVjO99b',
  // },
  // {
  //   title: 'Excel-Extractor',
  //   description: 'A python based application which scrapes data from book my show to calculate the user based rating of the movie',
  //   image: 'https://i.pinimg.com/736x/8a/eb/48/8aeb48a0eed3ac21b4f8a5d100383848.jpg',
  //   technologies: ['Python', 'Selenium', "Tkinter"],
  //   githubUrl: 'https://github.com/sagarkawad/excel-extractor',
  // },
  // {
  //   title: 'Classic XOXO',
  //   description: 'React based Tic-Tac-Toe',
  //   image: 'https://i.pinimg.com/736x/38/1f/77/381f7740895c1ee7b3ecaac5c19a1b26.jpg',
  //   technologies: ['React'],
  //   githubUrl: 'https://github.com/sagarkawad/tic-tac-toe',
  //   liveUrl: 'https://tic-tac-toexo.netlify.app/',
  // },
  // {
  //   title: 'Time Almost Final CountDown',
  //   description: 'React based Time Guessing Game',
  //   image: 'https://i.pinimg.com/736x/16/f4/52/16f4528b5a1072b2b08b7e16ca29d010.jpg',
  //   technologies: ['React'],
  //   githubUrl: 'https://github.com/sagarkawad/time-guess',
  //   liveUrl: 'https://time-guess.netlify.app/',
  // },
  // {
  //   title: 'Wavy Music Player',
  //   description: 'React based music player',
  //   image: 'https://i.pinimg.com/736x/29/21/40/292140dd6c5cbee0742a4d4866f6d375.jpg',
  //   technologies: ['React'],
  //   githubUrl: 'https://github.com/',
  //   liveUrl: 'https://wavymusic.netlify.app/',
  // },
  // {
  //   title: 'Go chat app',
  //   description: 'Shell based chat app written in go',
  //   image: 'https://i.pinimg.com/736x/7e/f0/3e/7ef03e0bd7393c24085228219e1fffd4.jpg',
  //   technologies: ['Go', "P2P"],
  //   githubUrl: 'https://github.com/sagarkawad/p2p-go-chat-app',
  // },

];

// Memoized ProjectCard
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  bgGradient: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  hoveredProject: number | null;
  setHoveredProject: React.Dispatch<React.SetStateAction<number | null>>;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(function ProjectCard({ project, index, hoveredProject, setHoveredProject }) {
  return (
    <div
      key={index}
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden ${
        hoveredProject === index ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{ willChange: 'transform' }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Floating Action Buttons */}
        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="w-5 h-5 text-gray-700" />
            </a>
          )}
        </div>
        {/* Gradient Accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>
      </div>
      {/* Content */}
      <div className="p-5 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
          {project.description}
        </p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className={`px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r ${project.bgGradient} text-gray-700 rounded-full text-xs md:text-sm font-medium border border-gray-200/50 hover:scale-105 transition-transform duration-200`}
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="flex space-x-3 md:space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
            >
              <Code className="w-5 h-5 mr-2 transition-transform duration-300" />
              <span className="font-medium">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn`}
            >
              <Eye className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              <span className="font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
});

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Animated Background Elements (reduced on mobile) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <div className="hidden md:block absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ willChange: 'opacity, transform' }}></div>
        <div className="hidden md:block absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" style={{ willChange: 'opacity, transform' }}></div>
      </div>
      <div className="container mx-auto px-3 md:px-6 relative z-10">
        <div className="container mx-auto px-3 md:px-6 lg:px-12 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-20">
            <div className="inline-block p-2 md:p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h1 className="py-2 text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
              Featured Projects
            </h1>
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p
              className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance"
              style={{ textWrap: 'balance' }}
            >
              Explore my latest work showcasing innovative solutions and creative implementations
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>
        {/* Show More Projects Hint */}
        <div className="text-center mt-10 md:mt-16">
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
           <a href="https://github.com/sagarkawad" target="_blank" rel="noopener noreferrer"> <span className="text-gray-600 mr-2 text-sm md:text-base">More projects available on</span></a>
            <Github className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
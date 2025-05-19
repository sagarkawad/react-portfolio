import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Perspective AI',
      description: 'A platform where you can break through the echo chambers of thought processes.',
      image: 'https://i.pinimg.com/736x/ec/6e/0e/ec6e0e48c37584db24040141d2cadd82.jpg',
      technologies: ['NextJS', 'Python', 'Langchain & Langgraph', "FastAPI", 'Tailwind CSS', "OpenAI"],
      githubUrl: 'https://github.com/sagarkawad/Perspective-AI',

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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Code
                </a>
                {project.liveUrl ?  <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
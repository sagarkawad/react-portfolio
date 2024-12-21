import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Online Bicycle Store',
      description: 'Online bicycle store to buy belt bicycles online',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', "Express"],
      githubUrl: 'https://github.com/sagarkawad/blue-bikes',
      liveUrl: 'https://becle.in',
    },
    {
      title: 'Blue-Bikes Android App',
      description: 'A mobile-first application for dealers to place bicycle orders to the manufacturer',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
      technologies: ['React Native', 'Supabase', "Recoil"],
      githubUrl: 'https://github.com/sagarkawad/bb-mobileapp',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Minimalistic Personal Notion Web App',
      description: 'A minimalistic polished task-list application which makes use of the browser local storage to save the tasks',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/sagarkawad/notes',
      liveUrl: 'https://mypersonalnotesapp.netlify.app/',
    },
    {
      title: 'Expense Visualiser',
      description: 'A minimalistic expense visualer to track expenses in a graphical format',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Chart.js'],
      githubUrl: 'https://github.com/sagarkawad/spend-calculator',
      liveUrl: 'https://spend-calculator.netlify.app/',
    },
    {
      title: 'Review Sentiment Analysis',
      description: 'A python based application which scrapes data from book my show to calculate the user based rating of the movie. It creates an excel file, noting all the user reviews and finally calculating the final score of the movie',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'Selenium', "Tkinter", "Natural Language Processing Toolkit"],
      githubUrl: 'https://github.com/sagarkawad/bookmyshow',
      liveUrl: 'https://youtu.be/a1jlVGdpMtY?si=AhI-bEenDhVjO99b',
    },
    {
      title: 'Excel-Extractor',
      description: 'A python based application which scrapes data from book my show to calculate the user based rating of the movie',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'Selenium', "Tkinter"],
      githubUrl: 'https://github.com/sagarkawad/excel-extractor',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Classic XOXO',
      description: 'React based Tic-Tac-Toe',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['React'],
      githubUrl: 'https://github.com/sagarkawad/tic-tac-toe',
      liveUrl: 'https://tic-tac-toexo.netlify.app/',
    },
    {
      title: 'Time Almost Final CountDown',
      description: 'React based Time Guessing Game',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['React'],
      githubUrl: 'https://github.com/sagarkawad/time-guess',
      liveUrl: 'https://time-guess.netlify.app/',
    },
    {
      title: 'Wavy Music Player',
      description: 'React based music player',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['React'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://wavymusic.netlify.app/',
    },
    {
      title: 'Go chat app',
      description: 'Shell based chat app written in go',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['Go', "P2P"],
      githubUrl: 'https://github.com/sagarkawad/p2p-go-chat-app',
    },

  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
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
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.liveUrl ?  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
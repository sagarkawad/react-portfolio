import { NavLink } from './navigation/NavLink';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Sagar Kawad</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer specializing in Web & Mobile Development
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              disableBlue={true}
            >
              View My Work
            </NavLink>
            <NavLink 
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
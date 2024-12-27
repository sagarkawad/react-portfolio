import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'Go', "Python"],
    frontend: ['React', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js'],
    databases: ['MongoDB', 'PostgreSQL'],
    mobile: ['React Native', "Supabase", "Firebase"],
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code2 className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              {skills.languages.map((skill) => (
                <li key={skill} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Layout className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill) => (
                <li key={skill} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Database className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Backend & Databases</h3>
            <ul className="space-y-2">
              {[...skills.backend, ...skills.databases].map((skill) => (
                <li key={skill} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
            <ul className="space-y-2">
              {skills.mobile.map((skill) => (
                <li key={skill} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
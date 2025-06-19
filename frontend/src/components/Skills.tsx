import { Code2, Database, Layout, Smartphone, Server, Cloud, Zap } from 'lucide-react';
import { useState, useMemo } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiGo, SiExpress, SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiFlutter, SiSupabase, SiFirebase, SiKubernetes, SiAmazonecs, SiCloudflare, SiFastapi, SiLine, SiAmazon } from 'react-icons/si';

const skillCategoriesData = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'Go', 'Python'],
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    iconBg: 'from-orange-100 to-red-100'
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    iconBg: 'from-blue-100 to-cyan-100'
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'FastAPI'],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    iconBg: 'from-green-100 to-emerald-100'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL'],
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50',
    iconBg: 'from-purple-100 to-indigo-100'
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'Supabase', 'Firebase'],
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
    iconBg: 'from-pink-100 to-rose-100'
  },
  {
    title: 'DevOps',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'EC2', 'ECS', 'CDN', 'Linode'],
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-50 to-cyan-50',
    iconBg: 'from-teal-100 to-cyan-100'
  }
];

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  // Memoize categories to avoid re-creating on each render
  const skillCategories = useMemo(() => skillCategoriesData, []);

  // Handlers
  const handleMouseEnter = (index: number) => setHoveredCategory(index);
  const handleMouseLeave = () => setHoveredCategory(null);

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="py-2 text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
              Skills & Technologies
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-base  md:text-xl text-gray-600 w-full sm:max-w-3xl mx-auto leading-relaxed break-words text-balance">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const isHovered = hoveredCategory === categoryIndex;
            return (
              <div 
                key={category.title}
                className={`group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 ${isHovered ? 'scale-105' : ''}`}
                onMouseEnter={() => handleMouseEnter(categoryIndex)}
                onMouseLeave={handleMouseLeave}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
                aria-label={category.title}
              >
                {/* Icon Container */}
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {/* Faded background icon */}
                  <category.icon 
                    className={`absolute inset-0 w-12 h-12 m-auto opacity-10 pointer-events-none`} 
                    aria-hidden="true"
                  />
                  {/* Main icon */}
                  <category.icon className={`relative w-8 h-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} />
                </div>
                
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    // Map skill names to icons
                    const skillIconMap: Record<string, JSX.Element> = {
                      'HTML': <FaHtml5 className="w-5 h-5 text-orange-500" />, // HTML5
                      'CSS': <FaCss3Alt className="w-5 h-5 text-blue-500" />, // CSS3
                      'JavaScript': <FaJs className="w-5 h-5 text-yellow-400" />,
                      'Go': <SiGo className="w-5 h-5 text-cyan-700" />,
                      'Python': <FaPython className="w-5 h-5 text-blue-400" />,
                      'React': <FaReact className="w-5 h-5 text-cyan-500" />,
                      'Next.js': <SiNextdotjs className="w-5 h-5 text-gray-900" />,
                      'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-sky-400" />,
                      'Node.js': <FaNodeJs className="w-5 h-5 text-green-600" />,
                      'Express.js': <SiExpress className="w-5 h-5 text-gray-700" />,
                      'FastAPI': <SiFastapi className="w-5 h-5 text-green-500" />,
                      'MongoDB': <SiMongodb className="w-5 h-5 text-green-700" />,
                      'PostgreSQL': <SiPostgresql className="w-5 h-5 text-blue-700" />,
                      'React Native': <FaReact className="w-5 h-5 text-cyan-500" />,
                      'Flutter': <SiFlutter className="w-5 h-5 text-sky-500" />,
                      'Supabase': <SiSupabase className="w-5 h-5 text-green-600" />,
                      'Firebase': <SiFirebase className="w-5 h-5 text-yellow-500" />,
                      'Docker': <FaDocker className="w-5 h-5 text-blue-400" />,
                      'Kubernetes': <SiKubernetes className="w-5 h-5 text-blue-500" />,
                      'EC2': <SiAmazon className="w-5 h-5 text-orange-400" />,
                      'ECS': <SiAmazonecs className="w-5 h-5 text-orange-400" />,
                      'CDN': <SiCloudflare className="w-5 h-5 text-orange-500" />,
                      'Linode': <SiLine className="w-5 h-5 text-green-700" />,
                    };
                    const icon = skillIconMap[skill] || <FaGitAlt className="w-5 h-5 text-gray-400" />;
                    return (
                      <div 
                        key={skill}
                        className={`group/skill flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r ${category.bgGradient} border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 transform hover:scale-105`}
                        style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                      >
                        <span className="flex-shrink-0">{icon}</span>
                        <span className="text-gray-700 font-medium group-hover/skill:text-gray-900 transition-colors">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Skill Count Badge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-600 border border-gray-200/50">
                  {category.skills.length} skills
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="contact" className="py-6 pb-16 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-10 w-72 h-72 bg-gradient-to-r from-white to-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-46 h-76 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Let's start a conversation about your next project
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "spkawad21@gmail.com",
                  gradient: "from-blue-500 to-cyan-500",
                  bgGradient: "from-blue-50 to-cyan-50"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Pune, Maharashtra",
                  gradient: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-50 to-pink-50"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 ${
                    hoveredCard === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${item.bgGradient} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-8 h-8 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-300 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-100/50">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Send className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to collaborate?
                </h3>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  I'm always excited to work on new projects and bring creative ideas to life. 
                  Drop me a message and let's discuss how we can work together.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:spkawad21@gmail.com"
                    className={`group relative inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      isHovered 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/25' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-blue-500/25'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Animated background overlay - moved before content, pointer-events-none and z-0 added */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                    <span className="flex items-center space-x-3 relative z-10">
                      <Mail className="w-6 h-6" />
                      <span>Send Email</span>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                    </span>
                  </a>
                  
                  <p className="text-sm text-gray-500">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}

      </div>
    </section>
  );
};

export default Contact;
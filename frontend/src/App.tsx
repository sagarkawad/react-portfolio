import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { ScrollToTop } from './components/ScrollToTop';
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 relative overflow-hidden flex flex-col">
        {/* Decorative blurred gradients */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        {/* Decorative ping dots */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-purple-400 rounded-full animate-ping z-0"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000 z-0"></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-2000 z-0"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-ping delay-500 z-0"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <footer className="bg-gray-900 text-white py-8 mt-auto flex flex-col md:flex-row items-center">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-center mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sagar Kawad. All rights reserved.</p>
              <div className="flex justify-start space-x-6">
                <a href="https://x.com/sagzone_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  <FaTwitter size={32} color="white" />
                </a>
                <a href="https://www.linkedin.com/in/sagar-kawad-337474206/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  <FaLinkedin size={32} color="white" />
                </a>
                <a href="https://www.youtube.com/channel/UCQpqiGKyZD1OV0gTNGEC9Bg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  <FaYoutube size={32} color="white" />
                </a>
                <a href="https://www.instagram.com/sagzone/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  <FaInstagram size={32} color="white" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
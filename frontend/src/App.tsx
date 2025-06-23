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
      {/* </div> */}
    </Router>
  );
}

export default App;
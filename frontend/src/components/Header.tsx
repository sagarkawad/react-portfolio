import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import {  useLocation } from 'react-router-dom';
import { MenuButton } from './navigation/MenuButton';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './navigation/NavLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm" onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink href="/#home" className="text-2xl font-bold text-gray-800">
            SK
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              href="/"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive('/') ? 'text-blue-600' : ''
              }`}
            >
              About
            </NavLink>
            <NavLink
              href="/blog"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive('/blog') ? 'text-blue-600' : ''
              }`}
            >
              Blog
            </NavLink>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <NavLink
                  href="/"
                  className={`block text-gray-600 hover:text-gray-900 ${
                    isActive('/') ? 'text-blue-600' : ''
                  }`}
                 
                  setIsMenuOpen={setIsMenuOpen}
                >
                  About
                </NavLink>
                <NavLink
                  href="/blog"
                  className={`block text-gray-600 hover:text-gray-900 ${
                    isActive('/blog') ? 'text-blue-600' : ''
                  }`}
                 
                  setIsMenuOpen={setIsMenuOpen}
                >
                  Blog
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
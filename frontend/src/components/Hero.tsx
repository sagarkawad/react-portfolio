import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { NavLink } from './navigation/NavLink';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(touch.clientX - rect.left - rect.width / 2);
    y.set(touch.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.05)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg opacity-20 blur-lg"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity
          }}
        />
      </div>

      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ perspective: 1200 }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="w-full max-w-6xl mx-auto text-center"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Main Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-lg sm:text-xl text-blue-600 font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hello, World! 👋
              </motion.p>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">I'm </span>
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Sagar Kawad
                </motion.span>
              </h1>
              
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I like to{" "}
                <motion.span
                  className="font-semibold text-gray-800 relative inline-block"
              
                >
                  build things
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.span>{" "}
                with code ✨
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-8 px-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <NavLink
                  href="#projects"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  disableBlue={true}
                >
                  {/* Button content */}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View My Work</span>
                    <motion.span
                      className="text-lg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <NavLink 
                  href="#contact"
                  className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 backdrop-blur-sm bg-white/70"
                >
                  <span className="flex items-center space-x-2">
                    <span>Contact Me</span>
                    <motion.span
                      className="text-lg"
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      ✉️
                    </motion.span>
                  </span>
                </NavLink>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.div
                className="flex flex-col items-center space-y-2 text-gray-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* <span className="text-sm font-medium tracking-wide">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                  <motion.div
                    className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div> */}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
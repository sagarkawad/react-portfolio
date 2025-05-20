import { NavLink } from './navigation/NavLink';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { throttle } from 'lodash';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  useEffect(() => {
    const handleOrientation = throttle((event: DeviceOrientationEvent) => {
      if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
        const newX = event.gamma * 2;
        const newY = event.beta * 2;
        x.set(newX);
        y.set(newY);
      }
    }, 50); // Throttle to 20 updates per second

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [x, y]);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      <motion.div
        className="container mx-auto px-6"
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-blue-600">Sagar Kawad</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I like to build things with code
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
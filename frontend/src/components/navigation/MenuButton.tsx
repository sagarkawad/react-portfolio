import React from 'react';
import { motion } from 'framer-motion';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: (custom: number) => ({
      rotate: custom,
      y: custom === 0 ? 8 : custom === 180 ? -8 : 0,
    }),
  };

  return (
    <motion.button
      className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="w-6 h-0.5 bg-gray-800 block mb-1.5"
        variants={lineVariants}
        animate={isOpen ? "open" : "closed"}
        custom={45}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-gray-800 block mb-1.5"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-gray-800 block"
        variants={lineVariants}
        animate={isOpen ? "open" : "closed"}
        custom={-45}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};
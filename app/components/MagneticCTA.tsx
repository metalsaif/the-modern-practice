"use client";

import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const MagneticCTA = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const transformTextX = useTransform(springX, (x) => x * 0.3);
  const transformTextY = useTransform(springY, (y) => y * 0.3);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    // The clean, inviting background
    <div className="bg-brand-background rounded-2xl p-12 text-center mt-20">
      
      {/* The FIXED, readable headline */}
      <h3 className="font-display text-3xl font-bold text-brand-primary-text mb-6">
        Ready to Start Your Success Story?
      </h3>
      
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.05 }} // The hover effect is now cleaner
        whileTap={{ scale: 0.95 }}
        // The NEW "Secondary" button styling
        className="group relative bg-transparent text-brand-accent font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 border-2 border-brand-accent flex items-center justify-center space-x-3 mx-auto hover:bg-brand-accent hover:text-white"
      >
        <motion.span 
          style={{ x: transformTextX, y: transformTextY }}
          className="block"
        >
          Book Your Consultation
        </motion.span>
        <motion.span 
          style={{ x: transformTextX, y: transformTextY }}
          className="block transition-transform duration-300 group-hover:translate-x-1" // Icon moves slightly on hover
        >
          <FaArrowRight />
        </motion.span>
      </motion.button>
    </div>
  );
};

export default MagneticCTA;
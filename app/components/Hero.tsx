"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientDivider from './GradientDivider';
import AppointmentForm from './AppointmentForm';

const trustStatements = [
  "Advanced Technology",
  "Painless Procedures",
  "Personalized Care",
  "Award-Winning Team",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % trustStatements.length);
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section id='home' className="relative min-h-screen"> 
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero1.webp')" }}
      ></div>

      {/* Main Content Container */}
      {/* ON MOBILE (base): A flex container to center the text */}
      {/* ON DESKTOP (lg): Reverts to a block container for absolute positioning */}
      <div className="relative z-10 container mx-auto px-4 h-full min-h-screen flex flex-col justify-center lg:block">
        
        {/* Text Content - NOW WITH RESPONSIVE POSITIONING */}
        <motion.div 
          className="w-full max-w-2xl text-center pt-60 lg:pt-0 lg:absolute lg:top-[60%]  lg:-translate-x-1/2 lg:-translate-y-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-accent-hover leading-tight mb-4 [text-shadow:2px_2px_8px_rgba(0,0,0,0.4)]">
            Experience Dentistry That Puts You First
          </h1>
          <p className="text-lg md:text-xl text-white font-semibold [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]">
            Precision care, unparalleled comfort, and a smile you&apos;ll love.
          </p>
        </motion.div>
      </div>

      {/* The Unified Action Hub - NO CHANGES NEEDED HERE, as it's hidden on mobile */}
      <div className="absolute top-10 bottom-0 right-0  w-full max-w-md bg-gray-900/50 backdrop-blur-md z-20 hidden lg:flex">
        {/* ... (rest of the action hub code remains identical) ... */}
        <div className="h-full w-full flex flex-col justify-between p-8">
          <AppointmentForm />
          <div className="relative h-20 lg:h-40 text-center">
            <AnimatePresence mode="wait">
              <motion.h3
                key={trustStatements[index]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-3xl lg:text-5xl text-[#1da2abff]"
              >
                {trustStatements[index]}
              </motion.h3>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <GradientDivider />
    </section>
  );
};

export default Hero;
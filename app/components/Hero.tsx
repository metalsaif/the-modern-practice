"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientDivider from './GradientDivider';


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
    // The main section container - NO PADDING HERE
    <section className="relative min-h-screen"> 
      
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero1.webp')" }}
      ></div>

      {/* Main Content Container - THIS NOW HANDLES THE PADDING */}
      <div className="relative z-10 container mx-auto px-4 h-full min-h-screen flex items-center pt-20">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-accent-hover leading-tight mb-4 [text-shadow:2px_2px_8px_rgba(0,0,0,0.4)]">
            Redefining Your Dental Experience
          </h1>
          <p className="text-lg md:text-xl text-brand-subtle-text font-semibold [text-shadow:1px_1px_4px_rgba(0,0,0,0.4)]">
  Precision care, unparalleled comfort, and a smile you&apos;ll love.
</p>
        </motion.div>
      </div>

      {/* The Unified Action Hub - positioned relative to the parent section */}
      <div className="absolute top-10 right-0 bottom-0 w-full max-w-md bg-gray-900/50 backdrop-blur-md z-20 hidden lg:flex">
        <div className="h-full w-full flex flex-col justify-between p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form>
              <h3 className="font-display text-2xl font-bold text-white mb-6 text-center">Schedule a Visit</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-lg placeholder-white/70 focus:ring-2 focus:ring-brand-accent" required />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-lg placeholder-white/70 focus:ring-2 focus:ring-brand-accent" required />
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-lg placeholder-white/70 focus:ring-2 focus:ring-brand-accent" required />
                <input type="text" placeholder="Preferred Day & Time" className="w-full p-3 bg-white/20 border border-white/30 text-white rounded-lg placeholder-white/70 focus:ring-2 focus:ring-brand-accent" required />
                <button type="submit" className="w-full bg-brand-accent text-white p-3 rounded-lg font-bold text-lg hover:bg-brand-accent-hover transition-colors">
                  Request Appointment
                </button>
              </div>
            </form>
          </motion.div>
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
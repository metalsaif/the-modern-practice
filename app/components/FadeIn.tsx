"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      // Initial state: invisible and slightly down
      initial={{ opacity: 0, y: 20 }}
      // Animate to: fully visible and at its original position
      whileInView={{ opacity: 1, y: 0 }}
      // Only trigger the animation once when it enters the viewport
      viewport={{ once: true }}
      // Define the transition timing
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
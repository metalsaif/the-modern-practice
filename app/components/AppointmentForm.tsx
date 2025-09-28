"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AppointmentForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a server
    alert('Thank you for your request!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit}>
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
  );
};

export default AppointmentForm;
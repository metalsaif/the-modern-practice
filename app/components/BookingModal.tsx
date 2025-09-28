"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarPlus, FaTimes } from 'react-icons/fa';
import AppointmentForm from './AppointmentForm'; // Import our reusable form

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };
  
  return (
    <>
      {/* This button is ONLY visible on mobile screens */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed z-30 bottom-8 left-8 bg-brand-accent text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open appointment form"
      >
        <FaCalendarPlus size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md relative border border-white/20"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" aria-label="Close appointment form">
                <FaTimes size={20} />
              </button>
              
              {/* Use the reusable form component */}
              <AppointmentForm />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingModal;
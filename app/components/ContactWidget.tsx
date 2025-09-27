"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setStep(2);
    }
  };
  
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ message, name, email });
    alert('Thank you! We will get back to you shortly.');
    resetWidget();
  };

  const resetWidget = () => {
    setIsOpen(false);
    // A slight delay to allow the exit animation to complete before state reset
    setTimeout(() => {
        setStep(1);
        setMessage('');
        setName('');
        setEmail('');
    }, 300);
  }

  // Animation variants for the modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-30 bottom-8 right-8 bg-brand-accent text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open contact form"
      >
        <FaCommentDots size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <button onClick={resetWidget} className="absolute top-4 right-4 text-gray-400 hover:text-brand-primary-text transition-colors" aria-label="Close contact form">
                <FaTimes size={20} />
              </button>
              
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleSend} className="space-y-4">
                      <h3 className="font-display text-2xl font-bold text-brand-primary-text">Send us a message</h3>
                      <p className="text-brand-subtle-text pb-2">Have a question? We're here to help.</p>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message..."
                        className="w-full h-32 p-3 bg-brand-background border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent"
                        required
                      />
                      <button type="submit" className="w-full bg-brand-accent text-white p-3 rounded-lg font-bold text-lg hover:bg-brand-accent-hover transition-colors">
                        Send
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleFinalSubmit} className="space-y-4">
                      <h3 className="font-display text-2xl font-bold text-brand-primary-text">Just one more step!</h3>
                      <p className="text-brand-subtle-text pb-2">Please provide your details so we can reply.</p>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 bg-brand-background border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-brand-background border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent"
                        required
                      />
                      <button type="submit" className="w-full bg-brand-accent text-white p-3 rounded-lg font-bold text-lg hover:bg-brand-accent-hover transition-colors">
                        Submit
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactWidget;
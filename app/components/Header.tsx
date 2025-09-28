"use client";

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
// 1. IMPORT THE 'Variants' TYPE
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Services', href: '#services' },
    { title: 'Doctors', href: '#doctors' },
    { title: 'About Us', href: '#about' },
    { title: 'Testimonials', href: '#testimonials' },
  ];

  // 2. EXPLICITLY TYPE THE 'menuVariants' OBJECT
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%", transition: { staggerChildren: 0.1, delayChildren: 0.2, ease: 'easeInOut', duration: 0.5 } },
    exit: { opacity: 0, y: "-100%", transition: { ease: 'easeInOut', duration: 0.4 } }
  };

  // 3. (PROACTIVE FIX) EXPLICITLY TYPE THE 'linkVariants' OBJECT AS WELL
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          
          <div className="flex-1 md:flex-none">
            <Link href="#home" className="text-xl font-bold text-brand-primary-text">
              The Modern Practice
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="text-brand-primary-text font-semibold hover:text-brand-accent transition-colors">
                {link.title}
              </a>
            ))}
            <a href="tel:+1234567890" aria-label="Call us" className="text-brand-primary-text hover:text-brand-accent transition-colors"><FaPhone size={20} /></a>
            <a href="mailto:contact@modernpractice.com" aria-label="Email us" className="text-brand-primary-text hover:text-brand-accent transition-colors"><FaEnvelope size={22} /></a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Open mobile menu">
              <FaBars size={24} className="text-brand-primary-text" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            // The red underline here will now be gone
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4" aria-label="Close mobile menu">
              <FaTimes size={30} className="text-white" />
            </button>

            {navLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                // The red underline here will also be gone
                variants={linkVariants}
                className="font-display text-4xl text-white hover:text-brand-accent transition-colors"
              >
                {link.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
"use client";

import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  // We'll create a more structured array for easier mapping
  const navLinks = [
    { title: 'Services', href: '#services' },
    { title: 'Doctors', href: '#doctors' },
    { title: 'About Us', href: '#about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* The logo is now a link to the homepage */}
        <Link href="/" className="text-xl font-bold text-brand-primary-text">
          The Modern Practice
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="text-brand-primary-text font-semibold hover:text-brand-accent transition-colors"
            >
              {link.title}
            </a>
          ))}
          
          {/* Functional links for the contact icons */}
          <a 
            href="tel:+1234567890" 
            aria-label="Call us"
            className="text-brand-primary-text hover:text-brand-accent transition-colors"
          >
            <FaPhone size={20} />
          </a>
          <a 
            href="mailto:contact@modernpractice.com" 
            aria-label="Email us"
            className="text-brand-primary-text hover:text-brand-accent transition-colors"
          >
            <FaEnvelope size={22} />
          </a>
        </nav>
        {/* You could add a mobile menu hamburger icon here for future development */}
      </div>
    </header>
  );
};

export default Header;
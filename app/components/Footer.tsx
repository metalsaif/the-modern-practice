import React from 'react';
// Import the icons we'll need for contact info and social media
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // A helper component for footer links to keep the code clean
  const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="text-gray-300 hover:text-white hover:underline transition-colors duration-300">
      {children}
    </a>
  );

  return (
    <footer className="bg-brand-primary-text text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">The Modern Practice</h3>
            <p className="text-gray-400 leading-relaxed">
              Engineered with precision, delivered with compassion. Our commitment is to provide a dental experience that is comfortable, efficient, and of the highest quality.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold tracking-wider uppercase text-gray-400 mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><FooterLink href="#services">Services</FooterLink></li>
              <li><FooterLink href="#doctors">doctors</FooterLink></li>
              <li><FooterLink href="#about">about</FooterLink></li>
              <li><FooterLink href="#reviews">reviews</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="font-bold tracking-wider uppercase text-gray-400 mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-brand-accent flex-shrink-0" />
                <span>123 Dental Ave, Suite 100<br/>Smile City, ST 54321</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-brand-accent" />
                <FooterLink href="tel:123-456-7890">(123) 456-7890</FooterLink>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-brand-accent" />
                <FooterLink href="mailto:contact@modernpractice.com">contact@modernpractice.com</FooterLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-bold tracking-wider uppercase text-gray-400 mb-4">Follow Us</h4>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><FaInstagram size={24} /></a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div className="bg-black/20 py-4 px-4">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} The Modern Practice. All Rights Reserved. A Demo by [Your Name/Company].
        </div>
      </div>
    </footer>
  );
};

export default Footer;
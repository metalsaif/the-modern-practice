import React from 'react';
// Import specific, high-quality icons
import { FaTooth, FaUserMd, FaStethoscope } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Define the service data with a new 'icon' property
const services: { title: string; description: string; icon: IconType }[] = [
  {
    title: 'Cosmetic Dentistry',
    description: 'Achieve the perfect smile with our advanced cosmetic treatments, from whitening to veneers.',
    icon: FaTooth,
  },
  {
    title: 'Dental Implants',
    description: 'Restore your smile and confidence with our durable and natural-looking dental implants.',
    icon: FaUserMd, // Represents a specialist/surgeon
  },
  {
    title: 'General Checkups',
    description: 'Maintain optimal oral health with our comprehensive checkups and preventative care.',
    icon: FaStethoscope,
  },
];

const ServiceCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: IconType }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-brand-accent/50 text-center">
    
    {/* THIS IS THE CHANGED LINE */}
    <div className="w-16 h-16 bg-brand-background rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-accent mx-auto">
      <Icon className="text-brand-accent text-3xl transition-colors duration-300 group-hover:text-white" />
    </div>
    
    <h3 className="font-display text-2xl font-bold text-brand-primary-text mb-3">{title}</h3>
    
    <p className="text-brand-subtle-text leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id='services' className="bg-brand-background py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          {/* Use the elegant display font for the main title */}
          <h2 className="font-display text-5xl font-bold text-brand-primary-text mb-4">Our Services</h2>
          <p className="text-lg text-brand-subtle-text max-w-2xl mx-auto">
            Comprehensive care for a healthy, beautiful smile, delivered with the latest technology and a gentle touch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import Image from 'next/image';
// Import icons for the new "stat blocks"
import { FaGraduationCap, FaStar, FaUserMd } from 'react-icons/fa';

const MeetTheDoctor = () => {
  return (
    // Use a clean white background to contrast with the light blue services section
    <section id='doctors' className="bg-white py-24 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Side - NOW CENTERED ON MOBILE */}
        <div className="w-full sm:w-3/4 lg:w-full mx-auto">
          <Image 
            src="/images/doc1.webp"
            alt="Dr. Jane Doe, Lead Dentist at The Modern Practice"
            width={600}
            height={700}
            className="rounded-2xl shadow-2xl object-cover w-full h-full"
            quality={85}
          />
        </div>

        {/* Text & Credentials Side - NOW CENTERED ON MOBILE */}
        <div className="w-full text-center lg:text-left">
          <p className="text-brand-accent font-semibold tracking-wider uppercase mb-2">
            Lead Dentist & Founder
          </p>
          <h2 className="font-display text-5xl font-bold text-brand-primary-text mb-6">
            Meet Dr. Jane Doe
          </h2>

          {/* Credentials Section - NOW RESPONSIVE */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-6 md:space-y-0 md:space-x-8 mb-8 border-t border-b border-gray-200 py-6">
            <div className="flex items-center space-x-3">
              <FaUserMd className="text-brand-accent text-3xl" />
              <div>
                <p className="font-bold text-brand-primary-text text-lg">5+ Years</p>
                <p className="text-brand-subtle-text">Experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaStar className="text-brand-accent text-3xl" />
              <div>
                <p className="font-bold text-brand-primary-text text-lg">Cosmetic Expert</p>
                <p className="text-brand-subtle-text">Specialty</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaGraduationCap className="text-brand-accent text-3xl" />
              <div>
                <p className="font-bold text-brand-primary-text text-lg">Harvard Dental</p>
                <p className="text-brand-subtle-text">Education</p>
              </div>
            </div>
          </div>
          
          <p className="text-brand-subtle-text leading-relaxed mb-6">
            Dr. Jane Doe is a board-certified dentist with over 15 years of experience in creating beautiful, healthy smiles. She is a firm believer in using the latest technology to provide the most comfortable and effective dental care possible.
          </p>

          {/* Personal Quote Section - THE HUMAN CONNECTION */}
          <blockquote className="border-l-4 border-brand-accent pl-6 py-2 italic text-brand-subtle-text">
            &quot;My philosophy is simple: combine precision engineering with a compassionate, human touch. Every patient deserves to feel heard, comfortable, and confident in their care.&quot;
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default MeetTheDoctor;
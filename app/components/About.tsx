import React from 'react';
import Image from 'next/image';
// Icons representing our core brand pillars
import { FaShieldAlt, FaRegSmile, FaUsers } from 'react-icons/fa';

// A helper component for our feature list items
const FeatureItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center">
      <Icon className="text-brand-accent text-2xl" />
    </div>
    <div>
      <h4 className="font-display text-xl font-bold text-brand-primary-text mb-1">{title}</h4>
      <p className="text-brand-subtle-text">{children}</p>
    </div>
  </div>
);

const About = () => {
  return (
    // We add the id here for the header link to work
    <section id="about" className="bg-brand-background py-24 px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The "Difference" Text Content */}
        <div>
          <h2 className="font-display text-5xl font-bold text-brand-primary-text mb-6">
            The Modern Practice Difference
          </h2>
          <p className="text-lg text-brand-subtle-text leading-relaxed mb-12">
            We believe that a visit to the dentist should be a positive, comfortable, and even enjoyable experience. Our practice was founded on the principle of combining state-of-the-art dental engineering with a compassionate, patient-first philosophy.
          </p>

          {/* Core Value Propositions */}
          <div className="space-y-8">
            <FeatureItem icon={FaShieldAlt} title="Advanced Technology">
              We utilize the latest in dental technology, from 3D imaging to laser dentistry, ensuring precise diagnostics and painless, efficient procedures.
            </FeatureItem>
            <FeatureItem icon={FaRegSmile} title="Unparalleled Comfort">
              Our clinic is designed to be a calm, relaxing sanctuary. Experience a spa-like atmosphere that soothes anxiety and redefines dental care.
            </FeatureItem>
            <FeatureItem icon={FaUsers} title="A Team That Cares">
              Our highly-trained team is dedicated to your health and comfort. We take the time to listen, explain, and provide truly personalized care.
            </FeatureItem>
          </div>
        </div>

        {/* Right Side: Inviting Interior Image */}
        <div className="w-full h-full min-h-[400px]">
          <Image 
            src="/images/about.jpeg" // IMPORTANT: Use a high-quality photo of a modern, clean clinic interior
            alt="The modern and clean interior of The Modern Practice"
            width={600}
            height={700}
            className="rounded-2xl shadow-2xl object-cover w-full h-full"
            quality={85}
          />
        </div>
        
      </div>
    </section>
  );
};

export default About;
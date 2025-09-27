import React from 'react';
// The quote icon will add a professional design touch
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import MagneticCTA from './MagneticCTA';

// Let's enhance our testimonial data structure
const testimonials = [
  {
    quote: "The most professional and comfortable dental experience I've ever had. My veneers are absolutely perfect!",
    name: 'Sarah L.',
    initials: 'SL',
    service: 'Cosmetic Dentistry',
  },
  {
    quote: "Dr. Doe and her team are amazing. They explained the entire implant process and made me feel completely at ease. The results are life-changing.",
    name: 'Michael B.',
    initials: 'MB',
    service: 'Dental Implants',
  },
  {
    quote: "I used to be anxious about dental checkups, but not anymore. The team here is so welcoming and gentle. A truly modern practice.",
    name: 'Jessica P.',
    initials: 'JP',
    service: 'General Checkups',
  },
  {
    quote: "The attention to detail is incredible. From the technology they use to the beautiful office, everything is top-tier.",
    name: 'David R.',
    initials: 'DR',
    service: 'Cosmetic Dentistry',
  },
];

const TestimonialCard = ({ quote, name, initials, service }: { quote: string; name: string; initials: string; service: string }) => (
  <div className="relative bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    {/* Large, decorative quote icon for visual flair */}
    <FaQuoteLeft className="absolute top-2 left-2 opacity-30 text-brand-accent text-3xl -z-0" />
    
    {/* Ensure the text is on top of the quote icon */}
    <p className="relative z-10 text-brand-subtle-text italic leading-relaxed mb-6">
      {quote}
    </p>

    <FaQuoteRight className="absolute bottom-20 right-2 opacity-30 text-brand-accent text-3xl -z-0" />

    {/* Humanized Patient Info */}
    <div className="flex items-center space-x-4">
      <div className="w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
        {initials}
      </div>
      <div>
        <p className="font-display font-bold text-brand-primary-text text-lg">{name}</p>
        <p className="text-brand-subtle-text">{service}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id='reviews' className="bg-white py-24 px-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-brand-primary-text mb-4">
            Stories From Our Patients
          </h2>
          <p className="text-lg text-brand-subtle-text max-w-2xl mx-auto">
            We&apos;re proud to have earned the trust of our community. Here&apos;s what a few of our patients have to say.
          </p>
        </div>

        {/* Dynamic Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
            {/* The second column is slightly offset for a more dynamic feel */}
            <div className="space-y-8 md:mt-12">
                {testimonials.slice(2, 4).map((testimonial) => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
            </div>
        </div>

        {/* The Conversion-focused CTA */}
        <MagneticCTA />
      </div>
    </section>
  );
};

export default Testimonials;
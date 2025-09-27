import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import MeetTheDoctor from './components/MeetTheDoctor';
import About from './components/About';
import ContactWidget from './components/ContactWidget';
import Footer from './components/Footer';
import { FadeIn } from './components/FadeIn'; // Make sure FadeIn is imported

const Testimonials = dynamic(() => import('./components/Testimonials'));

export default function HomePage() {
  return (
    <main className="bg-brand-background">
      <Header />
      <Hero />

      {/* Wrap each section in the FadeIn component */}
      <FadeIn>
        <Services />
      </FadeIn>
      
      <FadeIn>
        <MeetTheDoctor />
      </FadeIn>
      
      <FadeIn>
        <About />
      </FadeIn>
      
      <FadeIn>
        <Testimonials />
      </FadeIn>
      
      <ContactWidget />
      <Footer />
    </main>
  );
}
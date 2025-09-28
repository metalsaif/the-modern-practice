import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'], // Use a bold weight for headlines
  variable: '--font-playfair-display', // Use CSS variables
});

export const metadata: Metadata = {
  title: 'The Modern Practice - A New Standard in Dental Care',
  description: 'A demo website for modern dental practices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "The Modern Practice",
    "description": "Redefining the dental experience with precision care, advanced technology, and unparalleled comfort.",
    "url": "https://the-modern-practice.vercel.app/", // IMPORTANT: Replace with your final URL
    "image": "https://the-modern-practice.vercel.app/images/hero1.webp", // URL to a representative image
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Dental Ave, Suite 100",
      "addressLocality": "Smile City",
      "addressRegion": "ST",
      "postalCode": "54321",
      "addressCountry": "US"
    },
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "priceRange": "$$$"
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfairDisplay.variable} font-sans`}>
        {children}
        {/* ADD THE SCHEMA SCRIPT HERE */}
        <Script 
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
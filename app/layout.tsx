import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfairDisplay.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
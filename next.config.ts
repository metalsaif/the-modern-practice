import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 95], // We've defined our allowed quality values
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Content Security Policy (a basic one to start)
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' data:; img-src 'self' data:; font-src 'self' data:;",
          },
          // Prevents the site from being displayed in an iframe
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Prevents the browser from inferring a content type
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // A basic Referrer-Policy
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
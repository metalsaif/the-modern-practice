import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F7F9FA', // A soft, off-white
        'brand-primary-text': '#2D4356', // A deep, warm slate-blue
        'brand-subtle-text': '#1da2abff',  // A softer, gentle gray-blue
        'brand-accent': '#26A69A',      // A sophisticated, muted teal
        'brand-accent-hover': '#00897B', // A slightly richer hover state
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'], // Poppins is the default
        display: ['var(--font-playfair-display)', 'serif'], 
      },
    },
  },
  plugins: [],
}
export default config
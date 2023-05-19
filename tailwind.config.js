/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        expletus: ['Expletus Sans', 'cursive'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  keyframes: {
    shimmer: {
      '100%': {
        transform: 'translateX(100%)',
      },
    },
  },
};

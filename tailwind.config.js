/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f5',
          100: '#e8ebe5',
          200: '#d2d8cc',
          300: '#b3bda8',
          400: '#93a183',
          500: '#778768',
          600: '#5d6b51',
          700: '#4a5541',
          800: '#3d4536',
          900: '#343b2f',
        },
        sand: {
          50: '#faf8f5',
          100: '#f2ede5',
          200: '#e5dbc9',
          300: '#d4c4a8',
          400: '#c2aa85',
          500: '#b4966c',
          600: '#a7835f',
          700: '#8a6b4f',
          800: '#715743',
          900: '#5d4838',
        },
        warm: {
          50: '#fdf8f6',
          100: '#f9ede6',
          200: '#f2d7c8',
          300: '#e8b9a2',
          400: '#dc9478',
          500: '#d07558',
          600: '#c05e42',
          700: '#a14a36',
          800: '#833e31',
          900: '#6b352b',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

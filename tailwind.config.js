/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#003C72',
          secondary: '#7CDEAF',
          white: '#FDFEFF',
          black: '#2D0605',
        },
      },
    },
  },
  plugins: [],
}

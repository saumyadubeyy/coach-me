/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {},
    // colors: {},
    fontSize: {
      'sm-1': ['14px', '18px'],
      'md': ['25px', '35px'],
      'md-2': ['20px', '25px'],
      'md-3': ['40px', '50px'],
      'heading': ['50px', '60px']
    },
    extend: {},
  },
  plugins: [],
}

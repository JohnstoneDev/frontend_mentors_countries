/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      text : ['Nunito Sans', 'sans-serif']
    },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    colors: {
      'very-dark-blue' : 'hsl(207, 26%, 17%)',
      'dark-blue' : 'hsl(209, 23%, 22%)',
      'white' : 'hsl(0, 0%, 100%)',
    },
    extend: {},
  },
  plugins: [
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#303e45',
      'bluegrey': {
        100: '#f5f7f8',
        200: '#dfe5e8',
        300: '#becbd2',
        400: '#9eb1bb',
        500: '#7d97a5',
        600: '#57707d',
        700: '#4d636f',
        800: '#435761',
        900: '#3a4b53',
      },      
    },
    extend: {},
  },
  plugins: [],
}


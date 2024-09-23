/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "frontpage-image": "url(./src/img/software-developer-6521720_1920.png)"
      }
    },
  },
  plugins: [],
}


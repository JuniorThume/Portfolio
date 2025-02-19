/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light_gray': '#d3d3d3'
      },
      fontSize: {
        '2rem': '10rem'
      }
    },
  },

  plugins: [],
}


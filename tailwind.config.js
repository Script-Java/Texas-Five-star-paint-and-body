/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img1': "url('/src/assets/imgs/cobra.jpg')",
        'img2': "url('/src/assets/imgs/benz.jpg')",
        'img3': "url('/src/assets/imgs/challenger.jpg')",
      }
    }
  },
  plugins: [require('preline/plugin')],
}
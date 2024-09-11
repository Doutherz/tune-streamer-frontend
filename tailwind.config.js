/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-svg': "url('src/assets/layered-waves-haikei.svg')",
      },
      colors: {
        primary: '#001220', // off white
        secondary: '#80ffdb', // Orange
        accent: '#2166c4', // Red
        background: '#f5f5f5', // white
        border: '#0f0b0b',
      }
    },
  },
  plugins: [],
}
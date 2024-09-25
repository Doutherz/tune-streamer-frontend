/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-svg': "url('/layered-waves-haikei.svg')",
      },
      colors: {
        primary: '#001220',
        secondary: '#80ffdb',
        accent: '#2166c4',
        background: '#f5f5f5',
        border: '#0f0b0b',
      }
    },
  },
  plugins: [],
}
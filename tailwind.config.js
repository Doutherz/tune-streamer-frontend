/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: '#1D4ED8', // Blue
          secondary: '#F97316', // Orange
          accent: '#FBBF24', // Yellow
          background: '#F9FAFB', // Light Gray
          text: '#111827' // Dark Gray
        }
      }
    },
  },
  plugins: [],
}


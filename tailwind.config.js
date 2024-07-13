/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    colors: {
      'dark': '#1F2937',
      'light': '#F9FAFB',
      'primary': '#005555',
      'secondary': '#F8B400',
      'text-light-primary' : '#fff',
      'text-light-secondary' : '#C1C2C4',
      'border-color' : '#E1E6EF',
      'test': '#3B82F6',
    },
    extend: {},
  },
  plugins: [],
}
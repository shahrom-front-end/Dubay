/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    screens: {
      'sm':'340px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    }
  },
  plugins: [],
}


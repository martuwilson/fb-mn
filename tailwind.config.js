/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
        "flash-yellow": "rgba(253, 197, 0, 1)",
        "flash-violet": "rgba(86, 11, 173, 1)",
        "flash-light-violet": "rgba(114, 9, 183, 1)",
        "flash-light-yellow": "rgba(255, 213, 0, 1)"
      },
      screens: {
        'xs': '320px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}


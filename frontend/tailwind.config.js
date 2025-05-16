/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      screens: {
        xs: "300px",
        xl: "1280px",
        "2xl": "1480px",
        "3xl": "1600px",
        // ...defaultTheme.screens,
      },
       colors: {
        nestle: {
          DEFAULT: '#4B1D62',
          light: '#8A4FFF',
          accent: '#E20074',
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-300": "#6f9e86",
        "green-500": "#4f9e75",
        "green-800": "#209d5c",
        "yellow-300": "#ffedb2",
        "yellow-500": "#ffe180",
        "yellow-800": "#ffd034",
        "blue-300": "#9fb8e3",
        "blue-500": "#719be3",
        "blue-800": "#2d70e3",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#daf2e6",
        "primary-300": "#a1e5c2",
        "primary-500": "#60bf8e",
        "primary-800": "#209d5c",
        "secondary-300": "#ffedb2",
        "secondary-500": "#ffe180",
        "secondary-800": "#ffd034",
        "tertiary-300": "#9fb8e3",
        "tertiary-500": "#719be3",
        "tertiary-800": "#2d70e3",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        eyesmall: "url('./assets/eye-small-transparent.png')",
        abstractwaves: "url('./assets/abstract-waves.png')",
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
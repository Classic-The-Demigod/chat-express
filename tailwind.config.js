/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      accent: "#F17550",
      wine: "#231010",
      "black-500": "#131314",
      "black-400": "#2D2D2D",
      "black-300": "#646465",
      "black-200": "#ACADAF",
      "gray-500": "#74747A",
      "white-100": "#F0F1F3",
    },

    fontFamily: {
      primary: ["Plus Jakarta Sans", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

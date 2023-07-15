/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        inter: ["inter"],
        circular: ["circular STD"],
      },
      colors: {
        pink: "#F85E9F",
        orange: "#FF5722",
        grey: "#191825",
        ungu: "#5D50C6",
      },
      screens: {
        "2xl": "1184px",
      },
    },
  },
  plugins: [],
};

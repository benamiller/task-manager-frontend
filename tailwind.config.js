/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#82A0BC",
          500: "#304D6D",
        },
        accent: {
          700: "#4C0827",
        },
      },
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#F0F1F5",
        yellow: "#FFBF00",
        red: "#F20D0D",
      },
      fontFamily: {
        sans: ["ArchivoNarrow", "sans-serif"],
      },
    },
    plugins: [],
  },
};

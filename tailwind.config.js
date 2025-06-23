/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#F0F1F5",
        yellow: "#FFBF00",
        red: "#F20D0D",
        darkRed: "#AA0909",
      },
      fontFamily: {
        sans: ["ArchivoNarrow", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(1.5rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease forwards",
      },
    },
    plugins: [],
  },
};

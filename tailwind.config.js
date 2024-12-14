/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        christmas: ["Merienda", "cursive"],
        Syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};

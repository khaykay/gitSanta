/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        young: ["Young Serif", "sans-serif"],
        courgette: ["Courgette", "sans-serif"],
        christmas: ["Mountains of Christmas", "cursive"],
      },
    screens: {
      'xss': '300px',
      'xm': '400px',
    }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        Lacq: ["Lacquer", "cursive"],
        new: ["Yeon Sung", "cursive"],
      },
    },
  },
  plugins: [],
};

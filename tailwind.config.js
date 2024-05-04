/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#342F42",
        secondary: "#B8B4C5",
        background: "#F8F0E7",
        semiwhite: "#FFFFFF"
      }
    },
  },
  plugins: [],
}


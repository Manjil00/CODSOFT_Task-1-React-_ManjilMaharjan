/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        LogoFont: "'Zeyada', cursive;",
        },
        colors: {
          bgcolor: '#161618',
          bgcolorlite: '#212124',
        },
    },
  },
  plugins: [],
}
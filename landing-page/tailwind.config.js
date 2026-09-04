/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#546B41',
          secondary: '#99AD7A',
          tertiary: '#DCCCAC',
          light: '#FFF8EC'
        }
      }
    },
  },
  plugins: [],
}

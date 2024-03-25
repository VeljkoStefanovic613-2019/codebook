/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#1E293B",
      }
    },
  },
  plugins: [],
}
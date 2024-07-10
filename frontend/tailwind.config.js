/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': [" Montserrat", 'sans-serif'],
        'amatic':['Amatic SC', 'sans-serif'],
        'barriecito' :["Barriecito", 'system-ui'],
        'Afacad' :["Afacad", 'sans-serif']

      },
    },
  },
  plugins: [],
}
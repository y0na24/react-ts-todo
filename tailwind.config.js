
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#313131',
      secondary: '#007541',
      grey: '#595959',
      white: colors.white,
      transparent: colors.transparent
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

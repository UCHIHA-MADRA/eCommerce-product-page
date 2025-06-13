/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#03210b',
        secondary: '#fff9db'
      }
    }
  },
  plugins: []
}

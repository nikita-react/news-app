/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '10px',
        lg: '15px',
        xl: '20px',
        '2xl': '25px',
      },
    },
  },
  plugins: [],
}
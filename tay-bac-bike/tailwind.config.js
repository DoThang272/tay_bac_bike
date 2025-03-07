/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT( {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    colors: {
      'blue-main': '#55d1fa',
      'black-main-text': '#646464cc',
      'green-main': '#32CD32',
      'blue-main-100': '#e1f6fd',
      'blue-main-50': '#F6FCFE',
      'orange-main': '#FF4F17'
    },
    
  },
  plugins: [
    require('flowbite/plugin'),
  ],
});

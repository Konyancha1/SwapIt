/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}


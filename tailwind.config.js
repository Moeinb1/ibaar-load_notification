// /** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./app/components/*.{js,ts,jsx,tsx}",
    "./app/utils/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      height: {
        '128': '32rem',
        '20.5': '5.125rem'

      },
      width: {
        '105': '26.25rem',
        '128': '32rem',
        '160': '40rem'
      },
      colors: {
        primary: "#5050EB",
        accent: "#FF1F1F",
        secondary: " #AEAEAE",
        customPurple: '#5050EB',
        lightGray: '#AEAEAE'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      margin: {
        '54': '216px',

      }
    },
  },
  variants: {},
  plugins: [],
};
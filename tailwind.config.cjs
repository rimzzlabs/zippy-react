/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Inter"', ...fontFamily.sans]
      },
      colors: {
        primary: colors.violet,
        secondary: colors.blue,
        theme: colors.zinc
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}

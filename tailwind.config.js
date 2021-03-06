const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Google Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}

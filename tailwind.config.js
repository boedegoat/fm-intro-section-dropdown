const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    fontFamily: {
      sans: ['Epilogue', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'real-white': '#fff',
        white: 'hsl(0, 0%, 98%)',
        gray: 'hsl(0, 0%, 41%)',
        black: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
}

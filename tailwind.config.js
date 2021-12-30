const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#5B4EC6',
      secondary: '#CB91EB',
      pureRed:'#ff0000',
      customblue:'#11C7EF',
      white:colors.white,
      black:colors.black,
      gray: colors.coolGray,
      red:colors.red,
      orange: colors.orange,
      yellow: colors.amber,
      green: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.sky,
      blue:colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      pink: colors.pink,
      rose: colors.rose,
      
    },
    fontFamily: {
      'poppins': ['poppins','"sans serif"' ],
      'roboto': ['roboto','"sans serif"' ],
     },
    extend: {
      backgroundImage: {
        'product-bg': "url('img/product-bg.svg')",
        'footer-bg': "url('img/footer-bg.svg')",
        'product1-bg': "url('img/product1-bg.svg')",
        'product2-bg': "url('img/product2-bg.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

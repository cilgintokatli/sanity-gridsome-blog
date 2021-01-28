module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'templates/**/*.vue',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'arkaplan': '#7a2e94',
        'indigo': '#5c6ac4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

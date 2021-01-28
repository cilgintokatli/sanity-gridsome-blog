module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.pug',
        './src/**/*.md'
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

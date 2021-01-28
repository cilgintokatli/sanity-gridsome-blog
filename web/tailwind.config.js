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
        'maincolor': '#7a2e94',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

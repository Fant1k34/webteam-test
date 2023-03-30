module.exports = require('./utils/postcss-preset')({
  plugins: [
    require('autoprefixer')(),
    process.env.NODE_ENV === 'production' && require('cssnano')()
  ].filter(Boolean)
});
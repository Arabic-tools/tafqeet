module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      productionSourceMap = false
    } else {
      // mutate for development...
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}

module.exports = {
  // productionSourceMap: false, // test production option outside the function 
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

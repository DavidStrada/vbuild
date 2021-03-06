module.exports = function (options) {
  return {
    extendWebpack(config) {
      config.module.rule('eslint')
        .test(/\.(js|jsx|vue)$/)
        .exclude
          .add(/node_modules/)
          .end()
        .pre()
        .use('eslint')
          .loader('eslint-loader')
          .options(options)
    }
  }
}

class LogPlugin {
  apply(compiler){
    compiler.hooks.run.tap('logPlugin', compilation => {
      console.log(compilation)
      console.log('webpack 构建开始')
    })
  }
}


module.exports = LogPlugin
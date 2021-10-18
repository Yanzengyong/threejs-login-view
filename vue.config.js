// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 14
})
module.exports = {
  // ...
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/color.scss";
        `
      },
      postcss: {
        plugins: [postcss]
      }
    }
  },
  publicPath: './'
}

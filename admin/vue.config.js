/**
 * @Author: licheng
 * @Date: 2020/1/7 6:22 下午
 * @Description:
 */
let path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  // lintOnSave: false,
  // 选项...
  devServer: {
    open: true,
    https: false,
    disableHostCheck: true,
    // proxy: {
    //   "/api": { // 替换代理地址名称
    //     // target: "http://10.168.7.185",
    //     ws: true, // 是否启用websocket
    //     secure: false, // 将安全设置为false, 才能访问https开头的
    //     changeOrigin: true, // 可否跨域
    //     pathRewrite: {
    //       "^/api": "", // 重写接口，去掉/api
    //     }
    //   }
    // },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
  },
  // 优化打包: 本地、CDN加载依赖库
  configureWebpack: {
    externals: {
      // "vue": "Vue",
      // "vue-router": "VueRouter",
      // "vuex": "Vuex",
      // "element-ui": "element-ui",
      // "echarts": "echarts",
    }
  }
};

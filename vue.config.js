
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
        `
      }
    }
  }
}

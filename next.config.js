/* eslint-disable */
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withPlugins = require("next-compose-plugins"); // 同时引入多个组件

// module.exports = withPlugins([
//   [
//     withLess, {
//       lessLoaderOptions : {
//         javascriptEnabled : true
//       }
//     }
//   ],
//   withCss], {
module.exports = withPlugins([withCss, withLess], {
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
})

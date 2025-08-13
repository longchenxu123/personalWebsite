const { override, addLessLoader, fixBabelImports, adjustStyleLoaders,addWebpackAlias  } = require("customize-cra");
const path = require('path');

module.exports = override(
    // 配置Less加载器
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
            localIdentName: '[local]--[hash:base64:5]'
        }
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
      }),
    
    adjustStyleLoaders(({ use: [,, postcss] }) => {
        const postcssOptions = postcss.options;
        postcss.options = { postcssOptions };
    })
);
module.exports.devServer = function overrideDevServer(config) {
    // 加入 historyApiFallback
    config.historyApiFallback = true;
    return config;
};
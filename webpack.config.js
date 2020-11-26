const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { MODE: mode = 'development'} = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const styleLoaders = () => {
    const loaders = ['css-loader'];
    let firstLoader = 'style-loader';
    if (isProd) {
      firstLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: './'
        }
      }
    }
    loaders.unshift(firstLoader);
    return loaders;
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ];
    if (isProd) {
      plugins.push(new MiniCssExtractPlugin())
    }
    return plugins;
  }

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/main.js',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: styleLoaders()
        },
        {
          test: /\.s[ac]ss$/,
          use: [...styleLoaders(), 'sass-loader']
        }
      ]
    },
    plugins: getPlugins(),
    devServer: {
      open: true
    }
  }

}
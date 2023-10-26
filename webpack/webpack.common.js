const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

const deps = require('../package.json').dependencies

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'), // точка входа вашего приложения
  resolve: {
    //расширения файлов, которые Webpack будет искать при разрешении модулей
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    //объект определяет, как Webpack должен обрабатывать различные типы файлов
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    //созданные бандлы будут сохранены в каталоге ./build и будут названы bundle.js
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    // массив содержит список плагинов, которые используются в процессе сборки
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      favicon: path.resolve(__dirname, '..', './public/favicon.ico'),
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        MicroFrontendSlider:
          'MicroFrontendSlider@https://micro-frontend-slider.vercel.app/remoteEntry.js',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
}

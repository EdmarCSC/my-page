const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Minha página',
    }),
    new HtmlWebpackPlugin(__filename, 'index.html')
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
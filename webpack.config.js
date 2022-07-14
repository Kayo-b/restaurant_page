const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ]
  },

};
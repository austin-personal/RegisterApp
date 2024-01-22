const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { //exporting a JavaScript object as a module
  entry: './app.js', //main JavaScript file to start bundling dependencies
  output: { //output store as
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), //location to store
  },
  mode: 'development',
  resolve: {
    alias: {
        net: path.resolve(__dirname, 'emptyModule'),
      },
    fallback: {
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve('browserify-zlib'),
      crypto: require.resolve('crypto-browserify'),
      fs: false,
      http: require.resolve('stream-http'),
      assert: require.resolve('assert/'),
      net: require.resolve('net'),
      async_hooks: false,
    },
  },
  module: { //set up rules how webpack should process different types of files
    rules: [
      {
        test: /\.css$/, //regex to find .css file
        use: ['style-loader', 'css-loader'], //tool to process
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Public/index.html', //Specifies an array of webpack plugins to enhance the webpack functionality
      filename: 'index.html',
    }),
  ],
};

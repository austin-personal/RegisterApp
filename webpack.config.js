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
    fallback: {
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      async_hooks: require.resolve("async_hooks"),
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

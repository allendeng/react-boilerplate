import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config = {
  devtool: '#source-map',
  entry: {
    home: ['babel-polyfill', './src/index.jsx'],
    vendor: [
      'react',
      'react-dom',
      'react-css-modules',
      'redux',
      'redux-thunk',
      'react-redux',
      'react-router',
      'react-router-redux',
      'isomorphic-fetch',
      'normalizr',
      'immutable',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    // sourceMapFilename: '[file].map',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      include: path.resolve(__dirname, 'src'),
      test: /\.jsx?$/,
      loader: 'babel',
    }, {
      include: path.resolve(__dirname, 'src'),
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]',
    }, {
      include: path.resolve(__dirname, 'src'),
      test: /\.(png|jpg|eot|svg|ttf|woff|woff2|otf)\??.*$/,
      loader: 'url-loader?limit=8192',
    }],
  },
  plugins: [
    new HTMLWebpackPlugin({ title: 'react-boilerplate' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
  ],
}

export default config

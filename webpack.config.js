const { loaders, optimizations, plugins, resolvers } = require('./webpack');
const WebpackBar = require('webpackbar');

module.exports = {
  module: {
    rules: [...loaders],
  },
  optimization: optimizations,
  plugins: [...plugins(__dirname), new WebpackBar()],
  resolve: resolvers(__dirname),
  stats: 'normal',
};

// @ts-check
module.exports = {
  webpack(config, { dev }) {
    if (dev) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
  images: {
      domains: ['fakestoreapi.com']
  }

};
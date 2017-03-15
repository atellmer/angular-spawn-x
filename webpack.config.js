'use strict';

const path = require('path');
const webpack = require('webpack');
const env = process.env.WEBPACK_ENV;
const plugins = [];
const library = 'ngSpawn';
const coreFileName = 'angular-spawn-x'
let filename = coreFileName + '.umd.js';

plugins.push(new webpack.optimize.OccurrenceOrderPlugin());

if (env === 'build:prod') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  filename = coreFileName + '.umd.min.js';
}

const config = {
  externals: {
    '@angular/core': {
      root: ['ng', 'core'],
      commonjs2: '@angular/core',
      commonjs: '@angular/core',
      amd: '@angular/core'
    },
    'spawn-x': {
      root: 'Spawn',
      commonjs2: 'spawn-x',
      commonjs: 'spawn-x',
      amd: 'spawn-x'
    }
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js']
  },
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: filename,
    library: library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { 
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: plugins
}

module.exports = config;

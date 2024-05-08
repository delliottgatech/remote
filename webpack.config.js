const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sharedMappings = new mf.SharedMappings();

// The path to the CesiumJS source code
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "remote",
    publicPath: "auto",
    scriptType: 'text/javascript',
    sourcePrefix: '',
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    fallback: { "https": false, "zlib": false, "http": false, "url": false },
    mainFiles: ['index', 'Cesium'],
    alias: {
      ...sharedMappings.getAliases(),
      // CesiumJS module name
      cesium: path.resolve(__dirname, cesiumSource)
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify(''),
    }),
    new CopyWebpackPlugin({ 
      patterns: [
          { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
          { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }
      ]
  }),
    new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "remote",
        filename: "remoteEntry.js",
        exposes: {
          './WebComponents': './src/loadApp.ts', //exposes the web component based wrapper
         },        

        shared: share({

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ]
};


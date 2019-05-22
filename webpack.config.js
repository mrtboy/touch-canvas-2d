module.exports ={ 
  mode: "development",
  entry: "./app/*.js",
  output: {
      filename: "bundle.js"
  },
  watch: true,
  devtool: "source-map",
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: [
                          "env"
                      ]
                  }
              }
          }
      ]
  }
}
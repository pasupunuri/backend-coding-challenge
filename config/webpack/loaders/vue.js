module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [
    {
      loader: 'vue-loader'
    },
    {
      loader: 'vue-svg-inline-loader'
    }
  ]
}

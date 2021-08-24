const path = require('path')
const {
  environment,
} = require('@rails/webpacker')
const {
  VueLoaderPlugin,
} = require('vue-loader')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const vue = require('./loaders/vue')

const commitHash = process.env.COMMIT_HASH
const codeVersion = commitHash || '1.0'

environment.config.merge({
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
      '~components': path.resolve(__dirname, '../../app/vue/components'),
      '~models': path.resolve(__dirname, '../../app/vue/models'),
      '~pages': path.resolve(__dirname, '../../app/vue/pages'),
      '~brand-pages': path.resolve(__dirname, '../../app/vue/brand-pages'),
      '~mixins': path.resolve(__dirname, '../../app/vue/mixins'),
      '~images': path.resolve(__dirname, '../../app/vue/images'),
      '~utils': path.resolve(__dirname, '../../app/vue/utils'),
      '~filters': path.resolve(__dirname, '../../app/vue/filters'),
      '~plugins': path.resolve(__dirname, '../../app/vue/plugins'),
      '~store': path.resolve(__dirname, '../../app/vue/store'),
      '~tests': path.resolve(__dirname, '../../app/vue/tests'),
      '~types': path.resolve(__dirname, '../../app/vue/types'),
      '~routes': path.resolve(__dirname, '../../app/vue/routes'),
      '~locale': path.resolve(__dirname, '../../app/vue/locale'),
      '~app': path.resolve(__dirname, '../../app/vue/app'),
      '~vue': path.resolve(__dirname, '../../app/vue'),
      '~node_modules': path.resolve(__dirname, 'node_modules'),
    },
    extensions: [
      '.js', '.ts', '.vue',
    ],
  },
})

environment.loaders.get('file').use.find((item) => item.loader === 'file-loader').options.esModule = false

environment.plugins.prepend('DefinePlugin', new webpack.DefinePlugin({
  CODE_VERSION: JSON.stringify(codeVersion),
}))
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

environment.plugins.append(
  'ForkTsCheckerWebpackPlugin',
  new ForkTsCheckerWebpackPlugin({
    // this is a relative path to your project's TypeScript config
    typescript: {
      configFile: path.resolve(__dirname, '../../tsconfig.json'),
      extensions: {
        // type-check .vue files using lang="ts"
        vue: true,
      },
    },
    // non-async so type checking will block compilation
    async: environment.config.mode === 'development',
    eslint: {
      enabled: false,
      files: [
        'app/vue/**/*.js',
        'app/vue/**/*.ts',
        'app/vue/**/*.vue',
      ],
    },
  }),
)
environment.loaders.delete('nodeModules')

module.exports = environment

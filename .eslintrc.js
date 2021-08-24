const path = require('path')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['vue', 'jest'],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~components': path.resolve(__dirname, 'app/vue/components'),
              '~models': path.resolve(__dirname, 'app/vue/models'),
              '~pages': path.resolve(__dirname, 'app/vue/pages'),
              '~mixins': path.resolve(__dirname, 'app/vue/mixins'),
              '~utils': path.resolve(__dirname, 'app/vue/utils'),
              '~filters': path.resolve(__dirname, 'app/vue/filters'),
              '~plugins': path.resolve(__dirname, 'app/vue/plugins'),
              '~store': path.resolve(__dirname, 'app/vue/store'),
              '~tests': path.resolve(__dirname, 'app/vue/tests'),
              '~types': path.resolve(__dirname, 'app/vue/types'),
              '~routes': path.resolve(__dirname, 'app/vue/routes'),
              '~locale': path.resolve(__dirname, 'app/vue/locale'),
              '~app': path.resolve(__dirname, 'app/vue/app'),
              '~vue': path.resolve(__dirname, 'app/vue'),
              '~node_modules': path.resolve(__dirname, 'node_modules'),
            },
            extensions: [
              '.js', '.ts', '.vue',
            ],
          },
        },
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'max-len': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    semi: ['error', 'never'],
    'vue/no-v-html': 'off',
    '@typescript-eslint/member-delimiter-style': 'warn',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'no-param-reassign': 'off',
    'import/extensions': 'off',
  },
  overrides: [{
    files: ['*.ts', '**/*.ts', '**/*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      ecmaVersion: 2020,
    },
    extends: [
      'airbnb-base',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:vue/recommended',
      'plugin:jest/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    env: {
      browser: true,
      jest: true,
    },
    rules: {
      'max-len': 'off',
      'no-alert': 'off',
      'global-require': 'off',
      'vue/no-v-html': 'off',
      'vue/max-attributes-per-line': ['warn', {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      }],
      'import/extensions': 'off',
      'no-unused-vars': ['off'],
      '@typescript-eslint/no-unused-vars': ['warn', {
        ignoreRestSiblings: true,
      }],
      'no-undef': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      semi: ['error', 'never'],
      indent: 'off',
      '@typescript-eslint/indent': [2, 2],
      'prefer-destructuring': 'warn',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
    },
  }],
}

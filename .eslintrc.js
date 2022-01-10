module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['eslint:recommended', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
};

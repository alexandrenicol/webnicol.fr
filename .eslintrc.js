module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
};

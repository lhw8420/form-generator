module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {},
  parserOptions: {
    parser: 'babel-eslint'
  }
};

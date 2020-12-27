module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    'plugin:vue/vue3-essential',
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'object-shorthand': 'warn'
  }
}

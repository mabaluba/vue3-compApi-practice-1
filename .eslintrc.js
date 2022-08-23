module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-empty': [ 'error', { 'allowEmptyCatch': true } ],
    'no-var': 'error',
    'semi': [ 'error', 'always' ],
    'semi-spacing': [ 'error', { 'before': false, 'after': false } ],
    'quotes': [ 'error', 'single', { 'avoidEscape': true } ],
    'space-in-parens': [ 'error', 'never' ],
    'array-bracket-spacing': [ 'error', 'always', { 'arraysInArrays': false } ],
    'object-curly-spacing': [ 'error', 'always', { 'objectsInObjects': false } ],
    'no-multiple-empty-lines': [ 'warn', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 } ],
    'template-curly-spacing': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
    'keyword-spacing': [ 'error', { 'overrides': {
      'if': { 'after': true },
      'for': { 'after': true },
      'while': { 'after': true },
      'static': { 'after': true },
      'as': { 'after': true }
    }} ],
    'rest-spread-spacing': [ 'error', 'always' ],
    'arrow-body-style': [ 'error', 'as-needed' ],
    'no-mixed-spaces-and-tabs': 'error',
    indent: [ 1, 2, { 'ignoreComments': true } ]
  }
}

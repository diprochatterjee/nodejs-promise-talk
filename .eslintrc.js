module.exports = {
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:node/recommended'
  ],
  rules: {
    'node/no-unsupported-features/es-builtins': ['error', 'always'],
    'node/no-unsupported-features/es-syntax': ['error', 'always'],
    'node/no-unsupported-features/node-builtins': ['error', 'always'],
    'node/no-unpublished-require': [0],
    'prettier/prettier': 'error',
    'no-mixed-requires': [1, {'grouping': true, 'allowCall': true}]
  }
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  parser: '@typescript-eslint/parser',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-console': ['off', 'never'],
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'prefer-destructuring': 'off',
    quotes: ['error', 'single']
  }
}

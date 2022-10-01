module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/strict-boolean-expressions': 'off'

  }
}

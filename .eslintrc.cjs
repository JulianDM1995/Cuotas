/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'always' }],
    'spaced-comment': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'off',
  },
}

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'on', // 사용하지 않는 변수에 대한 린트 옵션
    'prettier/prettier': 'error',
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error', 'test'],
      },
    ],
  },
};

// apps/api/.eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json', // Or tsconfig.eslint.json if you have one
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'], // Make sure 'prettier' is here
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Add this for prettier integration
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        "endOfLine": "crlf" // Match what you set in root .prettierrc.json
      }
    ]
  },
};

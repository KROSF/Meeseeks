module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', 'ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'promise',
    'unicorn',
    'eslint-comments',
    'prefer-arrow',
    'import',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-unresolved': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^([A-Z])[a-z--]+.tsx$'],
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/prefer-stateless-function': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
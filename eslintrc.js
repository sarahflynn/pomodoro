module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['json', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'consistent-return': 0,
    'import/extensions': [0],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': [0],
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': [0],
    'no-case-declarations': 0,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
    'no-trailing-spaces': [2],
    'prefer-destructuring': 1,
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': [0],
    'react/sort-comp': 0,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.test.{js,jsx,ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-var-requires': 0,
        'array-callback-return': 0,
        'jest/consistent-test-it': 2,
        'jest/expect-expect': 2,
        'jest/no-commented-out-tests': 1,
        'jest/no-disabled-tests': 1,
        'jest/no-empty-title': 2,
        'jest/no-focused-tests': 2,
        'jest/no-identical-title': 2,
        'jest/no-jest-import': 2,
        'jest/prefer-to-be-null': 1,
        'jest/prefer-to-be-undefined': 1,
        'jest/prefer-to-contain': 1,
        'jest/prefer-to-have-length': 1,
        'jest/require-tothrow-message': 1,
        'jest/valid-expect': 2,
        'no-console': 0,
      },
    },
    {
      files: ['__e2e__/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'func-names': 0,
        'no-console': 0,
        'no-irregular-whitespace': 0,
      },
    },
    {
      files: ['src/containers/index.ts', 'src/components/index.tsx'],
      rules: {
        'import/no-cycle': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};

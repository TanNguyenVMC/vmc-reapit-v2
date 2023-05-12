module.exports = {
    env: {
      browser: true,
      es2022: true,
      node: true,
      jest: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      semi: ['error', 'never'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'max-len': ['error', { code: 120, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreStrings: true }],
      'no-confusing-arrow': ['error', { allowParens: false }],
      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
        },
      ],
      'no-tabs': ['error', { allowIndentationTabs: true }],
      'no-unexpected-multiline': 'error',
      // Disabling as conflicts with Prettier
      indent: 'off',
      // Disabling as we are validating types with TypeScript not PropTypes
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  
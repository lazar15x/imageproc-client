import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import react from 'eslint-plugin-react';
import stylexPlugin from '@stylexjs/eslint-plugin';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      react: react,
      '@stylexjs': stylexPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/no-unused': 'error',
      '@stylexjs/valid-shorthands': 'warn',
      '@stylexjs/sort-keys': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
            ['^\\u0000'],
            // 2. `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^react$', '^@?\\w'],
            // 3. Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group. (also relative imports starting with "../")
            ['^@', '^'],
            // 4. relative imports from same folder "./" (I like to have them grouped together)
            ['^\\./'],
            // 5. style module imports always come last, this helps to avoid CSS order issues
            ['^.+\\.(module.css|module.scss)$'],
            // 6. media imports
            ['^.+\\.(gif|png|svg|jpg)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
);

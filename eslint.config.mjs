// eslint.config.mjs
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@next/eslint-plugin-next': eslintPluginNext,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      // Next.js recommended rules
      ...eslintPluginNext.configs.recommended.rules,
      // React and hooks best practices
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      // Additional stylistic preferences
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off', // Next.js provides React automatically
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        name: 'base-config',
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // Aturan dasar JavaScript
            ...js.configs.recommended.rules,

            // Contoh tambahan aturan
            'no-console': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        },
    },
];

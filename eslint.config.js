// Configuracion de ESLint para el proyecto
// Usando flat config (ESLint 9+)

import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                // Node.js globals
                console: 'readonly',
                process: 'readonly',
                module: 'readonly',
                require: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                // Jest globals
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                jest: 'readonly'
            }
        },
        rules: {
            // Reglas sencillas como indica el laboratorio
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'semi': ['error', 'always'],
            'quotes': ['warn', 'single']
        }
    },
    {
        // Ignorar node_modules
        ignores: ['node_modules/**']
    }
];

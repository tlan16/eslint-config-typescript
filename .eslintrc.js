module.exports = {
    root: true,
    rules: {},
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
        './rules/base',
        './rules/typescript',
    ],
    env: {
        browser: false,
        es6: true,
        jest: true,
        node: true,
    },
    plugins: [
        '@typescript-eslint',
        'filenames',
        'import',
        'prettier',
        'security',
        'unused-imports',
    ],
    settings: {
        'import/extensions': ['.js', '.ts'],
    },
};

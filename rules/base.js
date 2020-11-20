module.exports = {
    rules: {
        camelcase: 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],
        'comma-spacing': 'error',
        'eol-last': 'error',
        indent: 'off',
        'keyword-spacing': 'error',
        'max-len': [
            'warn',
            {
                code: 160,
            },
        ],
        'no-case-declarations': 'off',
        'no-dupe-class-members': 'off',
        'no-duplicate-imports': ['error', { includeExports: true }],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'no-use-before-define': 'off',
        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: true },
        ],
        'object-curly-spacing': ['error', 'always'],
        'prefer-const': 'error',
        quotes: [
            2,
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        semi: 'error',
    },
};

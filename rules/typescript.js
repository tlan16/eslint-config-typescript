module.exports = {
    rules: {
        // When changing a @typescript-eslint setting that exists on eslint
        // remember to set it to off for eslint as well
        '@typescript-eslint/ban-types': ['off'],
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': 'error',
        '@typescript-eslint/no-var-requires': ['off'],
    },
};

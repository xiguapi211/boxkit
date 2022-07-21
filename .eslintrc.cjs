module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-namespace': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-var-requires': 0,
        'no-useless-escape': 'off',
        'space-before-function-paren': 'off',
        'require-direct-export': 'off',
        'vue/require-direct-export': 'off',
        'vue/html-indent': ['warn', 4],
        'vue/multi-word-component-names': 'off'
    }
};

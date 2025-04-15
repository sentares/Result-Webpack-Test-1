const js = require('@eslint/js')
const { FlatCompat } = require('@eslint/eslintrc')
const path = require('path')

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

module.exports = [
	js.configs.recommended,
	...compat.config({
		env: {
			browser: true,
			node: true,
			es2021: true,
		},
		extends: ['airbnb-base'],
		parser: '@babel/eslint-parser',
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			requireConfigFile: false,
		},
		rules: {
			'func-names': 'off',
			'import/no-unresolved': 'off',
			'import/extensions': 'off',
			'no-console': 'off',
			'import/extensions': 'off',
			'max-len': ['error', { code: 120, ignoreComments: true }],
			'no-param-reassign': ['error', { props: false }],
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'no-use-before-define': ['error', { functions: false }],
			'prefer-destructuring': ['error', { object: true, array: false }],
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.json'],
					moduleDirectory: ['node_modules', 'src/'],
				},
			},
		},
	}),
]

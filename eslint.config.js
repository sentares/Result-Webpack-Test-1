const js = require('@eslint/js')
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

module.exports = [
	{
		files: ['**/*.{js,ts}'],
		ignores: ['node_modules/**', 'dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	js.configs.recommended,
	...compat.config({
		env: {
			browser: true,
			node: true,
			es2021: true,
		},
		extends: ['airbnb-base'],
		parser: '@typescript-eslint/parser',
		plugins: ['@typescript-eslint'],
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			requireConfigFile: false,
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-restricted-globals': 'warn',
			'no-unused-expressions': 'warn',
			'no-tabs': 'off',
			'global-require': 'off',
			'func-names': 'off',
			'import/no-unresolved': 'off',
			'import/extensions': 'off',
			'no-console': 'off',
			'max-len': ['error', { code: 120, ignoreComments: true }],
			'no-param-reassign': ['error', { props: false }],
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'no-use-before-define': ['error', { functions: false }],
			'prefer-destructuring': ['error', { object: true, array: false }],
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
					moduleDirectory: ['node_modules', 'src/'],
				},
			},
		},
	}),
]

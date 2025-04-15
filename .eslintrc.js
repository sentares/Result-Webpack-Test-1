module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
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
		'import/extensions': ['error', 'ignorePackages'],
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
}

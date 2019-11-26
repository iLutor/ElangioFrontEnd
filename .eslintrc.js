module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'only-warn'
	],
	'rules': {
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/react-in-jsx-scope': 1,
		'no-empty': 1,
		'no-empty-function': 1,
		'no-var': 1,
		'no-warning-comments': 1,
		'no-compare-neg-zero': 1,
		'no-duplicate-case': 1,
		'no-dupe-keys': 1,
		'indent': [
			1,
			'tab'
		],
		'linebreak-style': [
			1,
			'windows'
		],
		'quotes': [
			1,
			'single'
		],
		'semi': [
			1,
			'never'
		]
	}
}
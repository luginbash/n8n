/** @format */

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: __dirname + '/tsconfig.json',
		sourceType: 'module',
		createDefaultProgram: true,
	},
	plugins: [
		'eslint-plugin-jsdoc',
		'eslint-plugin-import',
		'@typescript-eslint',
		'@typescript-eslint/tslint',
		'prettier',
	],
	rules: {
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array-simple',
			},
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-types': [
			'error',
			{
				// TODO: Check with Jan if he prefers the defaults (https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)
				types: {
					Object: {
						message: 'Use object instead',
						fixWith: 'object',
					},
					String: {
						message: 'Use string instead',
						fixWith: 'string',
					},
					Boolean: {
						message: 'Use boolean instead',
						fixWith: 'boolean',
					},
					Number: {
						message: 'Use number instead',
						fixWith: 'number',
					},
					Symbol: {
						message: 'Use symbol instead',
						fixWith: 'symbol',
					},
					Function: {
						message: [
							'The `Function` type accepts any function-like value.',
							'It provides no type safety when calling the function, which can be a common source of bugs.',
							'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
							'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
						].join('\n'),
					},
				},
				extendDefaults: false,
			},
		],
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public',
			},
		],
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'allowSingleOrDouble',
				trailingUnderscore: 'allowSingleOrDouble',
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I'],
			},
			{
				selector: 'property',
				format: ['camelCase'],
				leadingUnderscore: 'allowSingleOrDouble',
				trailingUnderscore: 'allowSingleOrDouble',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
			{
				selector: ['method', 'function'],
				format: ['camelCase'],
				leadingUnderscore: 'allowSingleOrDouble',
			},
		],
		'@typescript-eslint/no-duplicate-imports': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/triple-slash-reference': 'error',
		'array-element-newline': [
			'error',
			{
				ArrayExpression: 'consistent',
				ArrayPattern: { multiline: true },
			},
		],
		'arrow-body-style': 'off',
		'comma-dangle': [
			'error',
			{
				objects: 'always-multiline',
				arrays: 'always-multiline',
				functions: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
			},
		],
		curly: ['error', 'multi-line'],
		'default-case': 'error',
		eqeqeq: ['error', 'smart'],
		'guard-for-in': 'error',
		'id-blacklist': [
			'error',
			'any',
			'Number',
			'number',
			'String',
			'string',
			'Boolean',
			'boolean',
			'Undefined',
			'undefined',
		],
		'id-match': 'error',
		'import/no-default-export': 'error',
		'import/order': 'error',
		indent: 'off',
		'jsdoc/check-alignment': 'error',
		'jsdoc/check-indentation': 'error',
		'jsdoc/newline-after-description': 'error',
		'new-parens': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-debugger': 'error',
		'no-duplicate-imports': 'off',
		'no-invalid-this': 'error',
		'no-new-wrappers': 'error',
		'no-redeclare': 'error',
		'no-throw-literal': 'off',
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-vars': 'off',
		'no-useless-escape': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'off',
		'prefer-const': 'error',
		'prefer-spread': 'warn',
		'prettier/prettier': 'error',
		radix: 'error',
		'use-isnan': 'error',
		'@typescript-eslint/tslint/config': [
			'error',
			{
				rules: {
					ban: [
						true,
						{
							name: 'Array',
							message: 'tsstyle#array-constructor',
						},
					],
				},
			},
		],
	},
};

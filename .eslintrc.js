module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
    browser: true
  },
  rules: {
    'import/no-unresolved': 1,
    semi: 2,
    'react/prop-types': 0,
    camelcase: 0,
    'max-len': 0,
    'class-methods-use-this': 0,
    'react/self-closing-comp': 0,
    'no-console': 0,
    'class-methods-use-this': 1,
    'linebreak-style': 0,
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-for': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: {
          multiline: true,
          minProperties: 5,
          consistent: true
        }
      }
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'no-unused-vars': 1,
    'comma-dangle': [
      'error',
      'only-multiline'
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link'
        ],
        specialLink: [
          'to'
        ]
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/*.test.js'
      ],
      env: {
        jest: true // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error'
      }
    }
  ]
};

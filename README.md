# eslint-config-awake

This package provides an .eslintrc file as an extensible shared config.

## Requirements

1. Node >=4.2.0
2. NPM >=3.3.6

## Usage

To lint the rules, run the following commands:

1. `npm i`
2. `npm run lint`

This package exports 3 configurations for ESLint.

### eslint-config-awake

Lints ES2015+ and React. Requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-awake babel-eslint eslint-plugin-react eslint`
2. Add `"extends": "awake"` to your .eslintrc

### eslint-config-awake/base

Lints ES2015+ only. Requires `eslint` and `babel-eslint`.

1. `npm install --save-dev eslint-config-awake babel-eslint eslint`
2. Add `"extends": "eslint-config-awake/base"` to your .eslintrc

### eslint-config-awake/react

Lints React only. Requires `eslint` and `babel-eslint`, and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-awake babel-eslint eslint-plugin-react eslint`
2. Add `"extends": "eslint-config-awake/react"` to your .eslintrc

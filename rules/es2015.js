module.exports = {
  "rules": {
    // Require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    "arrow-parens": [2, "always"],
    // Require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": [2, {
      "before": true,
      "after": true,
    }],
    // Verify calls of super() in constructors
    // http://eslint.org/docs/rules/constructor-super
    "constructor-super": 2,
    // Enforce spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": [2, {
      "before": false,
      "after": true,
    }],
    // Disallow duplicate name in class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": 2,
    // Disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": [2, {
      "allowParens": true
    }],
    // Disallow Symbol Constructor
    // http://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": 2,
    // Disallow use of this/super before calling super() in constructors
    // http://eslint.org/docs/rules/no-this-before-super
    "no-this-before-super": 2,
    // Disallow unnecessary computed property keys on objects
    // http://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": 2,
    // Disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": 2,
    // Disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": [2, {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": false,
    }],
    // Require let or const instead of var
    // http://eslint.org/docs/rules/no-var
    "no-var": 2,
    // Suggest using arrow functions as callbacks
    // http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-arrow-callback": 2,
    // Suggest using const, if a variable is never modified
    // http://eslint.org/docs/rules/prefer-const
    "prefer-const": 2,
    // Suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    "prefer-spread": 2,
    // Suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    "prefer-template": 2,
    // Require symbol description
    // http://eslint.org/docs/rules/symbol-description
    "symbol-description": 2,
    // Enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    "yield-star-spacing": [2, "before"],
  },
};

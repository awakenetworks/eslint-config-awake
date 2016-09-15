module.exports = {
  "rules": {
    // Disallow spaces inside of brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    "array-bracket-spacing": [2, "never"],
    // Enforce spaces inside of single line blocks
    // http://eslint.org/docs/rules/block-spacing
    "block-spacing": [2, "always"],
    // Enforce Brace Style
    // http://eslint.org/docs/rules/brace-style
    "brace-style": [2, "1tbs", {
      "allowSingleLine": false,
    }],
    // Require camelCase, except for property names
    // http://eslint.org/docs/rules/camelcase
    "camelcase": [2, {
      "properties": "never",
    }],
    // Enforce spacing around commas
    // http://eslint.org/docs/rules/comma-spacing
    "comma-spacing": [2, {
      "before": false,
      "after": true,
    }],
    // Enforce Comma Style
    // http://eslint.org/docs/rules/comma-style
    "comma-style": [2, "last"],
    // Disallow spaces inside of computed properties
    // http://eslint.org/docs/rules/computed-property-spacing
    "computed-property-spacing": [2, "never"],
    // Require Consistent this9
    // http://eslint.org/docs/rules/consistent-this
    "consistent-this": [2, "self"],
    // Require files to end with single newline
    // http://eslint.org/docs/rules/eol-last
    "eol-last": 2,
    // Disallow Spaces in Function Calls
    // http://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": [2, "never"],
    // Require Names for Function Expressions
    // http://eslint.org/docs/rules/func-names
    "func-names": 1,
    // Enforce minimum and maximum length for identifiers
    // http://eslint.org/docs/rules/id-length
    "id-length": [2, {
      "min": 2,
      "exceptions": ["i", "j", "x", "y", "z", "_"],
    }],
    // Enforce Indentation
    // http://eslint.org/docs/rules/indent
    "indent": [2, 2, {
      "SwitchCase": 1,
    }],
    // Enforce JSX Quote Style
    // http://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": [2, "prefer-single"],
    // Enforce Property Spacing
    // http://eslint.org/docs/rules/key-spacing
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true,
    }],
    // Limit Maximum Depth Blocks can be Nested
    // http://eslint.org/docs/rules/max-depth
    "max-depth": [2, 4],
    // Limit Maximum Length of Line
    // http://eslint.org/docs/rules/max-len
    "max-len": [2, 120, 2],
    // Enforce a maximum number of lines per file
    // http://eslint.org/docs/rules/max-lines
    "max-lines": [1, {
      "max": 500,
      "skipBlankLines": false,
      "skipComments": false
    }],
    // Enforce Maximum Depth of Nested Callbacks
    // http://eslint.org/docs/rules/max-nested-callbacks
    "max-nested-callbacks": [2, 4],
    // Limit Maximum Number of Parameters
    // http://eslint.org/docs/rules/max-params
    "max-params": [2, 4],
    // Limit Maximum Number of Statements
    // http://eslint.org/docs/rules/max-statements
    "max-statements": [2, 40],
    // Require Constructors to Use Initial Caps
    // http://eslint.org/docs/rules/new-cap
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false,
    }],
    // Require Parens for Constructors
    // http://eslint.org/docs/rules/new-parens
    "new-parens": 2,
    // Disallow if as the Only Statement in an else Block
    // http://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": 2,
    // Disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-mixed-spaces-and-tabs": 2,
    // Disallow multiple blank lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": [2, {
      "max": 2,
    }],
    // Disallow Nested Ternaries
    // http://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": 2,
    // Disallow the use of the Object constructor
    // http://eslint.org/docs/rules/no-new-object
    "no-new-object": 2,
    // Disallow trailing spaces at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": 2,
    // Disallow conditional expressions that can be expressed with simpler constructs
    // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": 2,
    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": [2, {
      "allow": [],
      "allowAfterThis": false,
      "allowAfterSuper": false
    }],
    // Disallow or enforce spaces inside of curly braces in objects
    // http://eslint.org/docs/rules/object-curly-spacing
    "object-curly-spacing": [2, "always"],
    // Require One Variable Declaration per line/scope
    // http://eslint.org/docs/rules/one-var
    "one-var": [2, "never"],
    // Enforce Operator Assignment Shorthand
    // http://eslint.org/docs/rules/operator-assignment
    "operator-assignment": [2, "always"],
    // Enforce Operator Linebreak
    // http://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": [2, "after"],
    // Enforce padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    "padded-blocks": [2, {
      "blocks": "never",
      "classes": "never",
      "switches": "never"
    }],
    // Enforce Quoting Style for Property Names
    // http://eslint.org/docs/rules/quote-props
    "quote-props": [2, "as-needed"],
    // Enforce Quote Style
    // http://eslint.org/docs/rules/quotes
    "quotes": [2, "single", "avoid-escape"],
    // Enforce spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    "semi-spacing": [2, {
      "before": false,
      "after": true,
    }],
    // Enforce Semicolons
    // http://eslint.org/docs/rules/semi
    "semi": [2, "always"],
    // Enforce Usage of Spacing in Template Strings
    // http://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": [2, "never"],
    // Enforce spacing before and after keywords
    // http://eslint.org/docs/rules/keyword-spacing
    "keyword-spacing": [2, {
      "before": true,
      "after": true
    }],
    // Require Space Before Blocks
    // http://eslint.org/docs/rules/space-before-blocks
    "space-before-blocks": [2, "always"],
    // Disallow a space before function parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": [2, "never"],
    // Disallow spaces inside of parentheses
    // http://eslint.org/docs/rules/space-in-parens
    "space-in-parens": [2, "never"],
    // Require Spaces Around Infix Operators
    // http://eslint.org/docs/rules/space-infix-ops
    "space-infix-ops": 2,
    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": [1, {
      "words": true,
      "nonwords": false,
    }],
  },
};

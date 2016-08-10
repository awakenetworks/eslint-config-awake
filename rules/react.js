module.exports = {
  "rules": {
    // Prevent missing displayName in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    //"react/display-name": [2, {
    //  "ignoreTranspilerName": false,
    //}],
    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-boolean-value": [2, "never"],
    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-closing-bracket-location": [2, {
      "nonEmpty": "after-props",
      "selfClosing": "after-props",
    }],
    // Disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-curly-spacing": [2, "never"],
    // Disallow spaces around equal signs in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    "react/jsx-equals-spacing": [2, "never"],
    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    "react/jsx-handler-names": [2, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],
    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent-props": [2, 2],
    // No .bind() or Arrow Functions in JSX Props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": 2,
    // Prevent duplicate properties in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-duplicate-props": 2,
    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "react/jsx-no-undef": 2,
    // Validate spacing before closing bracket in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    "react/jsx-space-before-closing": [2, "always"],
    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-react": 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/jsx-uses-vars": 2,
    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    "react/no-danger": 2,
    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    "react/no-deprecated": 2,
    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    "react/no-did-mount-set-state": 2,
    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-did-update-set-state": 2,
    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    "react/no-direct-mutation-state": 2,
    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    "react/no-multi-comp": [2, {
      "ignoreStateless": true,
    }],
    // Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/no-unknown-property": 2,
    // Prefer ES6 classes over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-es6-class": 2,
    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": [2, {
      "ignore": ["className"],
    }],
    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/react-in-jsx-scope": 2,
    // Require returning value in render function
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    "react/require-render-return": 2,
    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": 2,
    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/sort-comp": [2, {
      "order": [
        "static-methods",
        "lifecycle",
        "everything-else",
        "/^on.+$/",
        "/^get.+$/",
        "/^render.+$/",
        "render",
      ],
    }],
    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
    "react/wrap-multilines": 2,
  },
};

module.exports = {
  "extends": [
    "eslint-config-awake/rules/best-practices",
    "eslint-config-awake/rules/errors",
    "eslint-config-awake/rules/es2015",
    "eslint-config-awake/rules/strict",
    "eslint-config-awake/rules/style",
    "eslint-config-awake/rules/variables",
  ],
  // https://github.com/babel/babel-eslint
  "parser": "babel-eslint",
  // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
  "env": {
    // browser global variables
    "browser": true,
    // enable all ECMAScript 6 features except for modules
    "es6": true,
    // Node.js global variables and Node.js-specific rules
    "node": true,
  },
  "ecmaFeatures": {
    // enable ES6 modules and global strict mode
    "modules": true,
  },
  "rules": {},
};

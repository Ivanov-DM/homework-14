module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    "max-len": ["error", { ignoreComments: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
  },
};

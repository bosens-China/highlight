module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    wx: true,
    Component: true,
    Page: true,
    getApp: true,
    Behavior: true,
    requirePlugin: true,
    App: true,
    getCurrentPages: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
  },
};

module.exports = {
  roots: true,
  parseOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'next/core-web-vitals',
  'react/jsx-no-undef': ['enabled', { allowGlobals: 'boolean' }],
}

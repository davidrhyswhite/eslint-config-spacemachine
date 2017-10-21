module.exports = {
  env: {
    mocha: true
  },

  rules: {
    // Enforces no exclusive it.only or describe.only blocks
    'mocha/no-exclusive-tests': 'error',

    // Enforces no exclusive it.skip or describe.skip blocks
    'mocha/no-skipped-tests': 'error',

    // Warn when there are tests pending, it or descrive blocks with no function defined
    'mocha/no-pending-tests': 'warn',

    // Enforces it or test blocks must be nested within a describe or suite block
    'mocha/no-global-tests': 'error'
  }
};

# eslint-plugin-spacemachine

ESLint config for Space Machine projects.

## Install and configure

This plugin requires ESLint `2.0.0` or later.

#### NPM
`npm install --save-dev @bbc/eslint-plugin-spacemachine`

#### Yarn
`yarn add --dev  @bbc/eslint-plugin-spacemachine`

Then add a reference to this plugin and selected rules in your `.eslintrc` config:

```json
{
  "plugins": [
    "spacemachine"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "warn"
  }
}
```
See [Configuring Eslint](http://eslint.org/docs/user-guide/configuring) on [eslint.org](http://eslint.org) for more info.

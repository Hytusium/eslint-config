# eslint-config

Shareable and usecase based ESLint configs for kash / Hytus (@KashEight)'s projects.  
It is based on ESLint flat config (https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Config Includes
- [All](https://github.com/Hytusium/eslint-config/tree/master/packages/all)
- [ECMAScript/JavaScript (Common)](https://github.com/Hytusium/eslint-config/tree/master/packages/common)
- [React](https://github.com/Hytusium/eslint-config/tree/master/packages/react)
- [TypeScript](https://github.com/Hytusium/eslint-config/tree/master/packages/typescript)

## Installation

See above packages.

## Usage

in `eslint.config.js`:

```js
// Change libraries as you can
import hytusiumConfig from "@hytusium/eslint-config"

export default [
  hytusiumConfig
]
```

## LICENSE

MIT

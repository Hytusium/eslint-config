# eslint-config

Shareable and usecase based ESLint configs for kash / Hytus (@KashEight)'s projects.  
It is based on ESLint flat config (https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Config Includes
- All
- ECMAScript/JavaScript (Common)
- React
- TypeScript

## Installation (WIP)

**NOTE: This project has NOT published on npm yet.**

### All Configs

```sh
npm i --save-dev @hytusium/eslint-config # for npm
yarn add -D @hytusium/eslint-config      # for yarn
pnpm add -D @hytusium/eslint-config      # for pnpm
```

in `eslint.config.js`

```js
import hytusiumConfig from "@hytusium/eslint-config"

export default [
  hytusiumConfig
]
```

### ECMAScript/JavaScript (Common) Configs

```sh
npm i --save-dev @hytusium/eslint-config-common # for npm
yarn add -D @hytusium/eslint-config-common      # for yarn
pnpm add -D @hytusium/eslint-config-common      # for pnpm
```

### React Configs

```sh
npm i --save-dev @hytusium/eslint-config-react # for npm
yarn add -D @hytusium/eslint-config-react      # for yarn
pnpm add -D @hytusium/eslint-config-react      # for pnpm
```

### TypeScript Configs

```sh
npm i --save-dev @hytusium/eslint-config-typescript # for npm
yarn add -D @hytusium/eslint-config-typescript      # for yarn
pnpm add -D @hytusium/eslint-config-typescript      # for pnpm
```

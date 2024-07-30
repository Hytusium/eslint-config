declare module "eslint-plugin-react" {
  import type {
    ESLint,
    Linter,
  } from "eslint"

  declare const exprt: {
    configs: {
      recommended: ESLint.ConfigData
      all: ESLint.ConfigData
      "jsx-runtime": ESLint.ConfigData
    }
    rules: Linter.RulesRecord
  }
  export = exprt
}

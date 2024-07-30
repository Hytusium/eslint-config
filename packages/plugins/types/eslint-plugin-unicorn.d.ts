declare module "eslint-plugin-unicorn" {
  import type {
    ESLint,
    Linter,
  } from "eslint"

  declare const exprt: {
    configs: {
      recommended: ESLint.ConfigData
      all: ESLint.ConfigData
      "flat/recommended": Linter.FlatConfig
      "flat/all": Linter.FlatConfig
    }
    rules: Linter.RulesRecord
  }
  export = exprt
}

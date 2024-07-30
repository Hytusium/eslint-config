declare module "eslint-plugin-import" {
  import type { ESLint, Linter } from "eslint"

  declare const exprt: {
    configs: {
      recommended: ESLint.ConfigData
      errors: ESLint.ConfigData
      warnings: ESLint.ConfigData
      "stage-0": ESLint.ConfigData
      react: ESLint.ConfigData
      "react-native": ESLint.ConfigData
      electron: ESLint.ConfigData
      typescript: ESLint.ConfigData
    }
    rules: Linter.RulesRecord
  }
  export = exprt
}

declare module "eslint-plugin-unused-imports" {
  import type { Linter } from "eslint"

  declare const exprt: {
    rules: Linter.RulesRecord
  }
  export = exprt
}

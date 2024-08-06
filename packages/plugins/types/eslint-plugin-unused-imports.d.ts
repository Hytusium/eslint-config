declare module "eslint-plugin-unused-imports" {
  import type { Linter } from "eslint"

  const exprt: {
    rules: Linter.RulesRecord
  }
  export = exprt
}

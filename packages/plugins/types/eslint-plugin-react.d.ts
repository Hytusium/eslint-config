declare module "eslint-plugin-react" {
  import type { ESLint, Rule } from "eslint"

  const exprt: {
    configs: {
      recommended: ESLint.ConfigData
      all: ESLint.ConfigData
      "jsx-runtime": ESLint.ConfigData
    }
    rules: Record<string, Rule.RuleModule>
  }

  export = exprt
}

declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Rule } from "eslint"

  const exprt: {
    configs: {
      recommended: ESLint.ConfigData
    }
    rules: Record<string, Rule.RuleModule>
  }

  export = exprt
}

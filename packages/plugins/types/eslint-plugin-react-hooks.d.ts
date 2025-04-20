// TODO: remove this file because it is no longer needed. instead, use official types

declare module "eslint-plugin-react-hooks" {
  import type { ESLint, Linter, Rule } from "eslint"

  const exprt: ESLint.Plugin & {
    configs: {
      recommended: Linter.LegacyConfig
    }
    rules: Record<string, Rule.RuleModule>
  }

  export default exprt
}

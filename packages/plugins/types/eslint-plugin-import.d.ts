// TODO: Remove this file after index.d.ts is added
// ref: https://github.com/import-js/eslint-plugin-import/blob/e5edf49ecdc745a947ef7931b5dee0ef858d6b93/index.d.ts

declare module "eslint-plugin-import" {
  import type { ESLint, Linter, Rule } from "eslint"

  const exprt: ESLint.Plugin & {
    meta: {
      name: string
      version: string
    }
    configs: {
      recommended: Linter.LegacyConfig
      errors: Linter.LegacyConfig
      warnings: Linter.LegacyConfig
      "stage-0": Linter.LegacyConfig
      react: Linter.LegacyConfig
      "react-native": Linter.LegacyConfig
      electron: Linter.LegacyConfig
      typescript: Linter.LegacyConfig
    }
    flatConfigs: {
      recommended: Linter.Config
      errors: Linter.Config
      warnings: Linter.Config
      "stage-0": Linter.Config
      react: Linter.Config
      "react-native": Linter.Config
      electron: Linter.Config
      typescript: Linter.Config
    }
    rules: Record<string, Rule.RuleModule>
  }

  export = plugin
}

import type { ESLint, Linter, Rule } from "eslint"

export type PrettierConfig = Linter.FlatConfig

export type PluginReactHooks = {
  configs: {
    recommended: ESLint.ConfigData
  }
  rules: Record<string, Rule.RuleModule>
}

export type PluginReact = {
  configs: {
    recommended: ESLint.ConfigData
    all: ESLint.ConfigData
    "jsx-runtime": ESLint.ConfigData
  }
  rules: Record<string, Rule.RuleModule>
}

export type PluginUnusedImports = {
  rules: Record<string, Rule.RuleModule>
}

export type PluginImport = {
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
  rules: Record<string, Rule.RuleModule>
}

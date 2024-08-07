import type { ESLint, Linter } from "eslint"

export type PrettierConfig = Linter.FlatConfig

export type PluginReactHooks = {
  configs: {
    recommended: ESLint.ConfigData
  }
}

export type PluginReact = {
  configs: {
    recommended: ESLint.ConfigData
    all: ESLint.ConfigData
    "jsx-runtime": ESLint.ConfigData
  }
  rules: Linter.RulesRecord
}

export type PluginUnusedImports = {
  rules: Linter.RulesRecord
}

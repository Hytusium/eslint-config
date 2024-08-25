import _prettierConfig from "eslint-config-prettier"
import _pluginImport from "eslint-plugin-import"
import _pluginReact from "eslint-plugin-react"
import _pluginReactHooks from "eslint-plugin-react-hooks"
import { config, type ConfigWithExtends } from "typescript-eslint"

import type {
  PluginReact,
  PluginReactHooks,
  PrettierConfig,
  PluginImport,
} from "./plugin-types.js"

export const prettierConfig: PrettierConfig =
  _prettierConfig satisfies PrettierConfig
export const pluginReact: PluginReact = _pluginReact satisfies PluginReact
export const pluginReactHooks: PluginReactHooks =
  _pluginReactHooks satisfies PluginReactHooks
export const pluginImport: PluginImport = _pluginImport satisfies PluginImport

export function mergeConfig(...configs: ConfigWithExtends[]) {
  return config(...configs)
}

export { fixupPluginRules, fixupConfigRules } from "@eslint/compat"
export { FlatCompat } from "@eslint/eslintrc"
export { default as eslint } from "@eslint/js"
export { default as pluginNode } from "eslint-plugin-n"
export { default as pluginUnicorn } from "eslint-plugin-unicorn"
export { default as pluginUnusedImports } from "eslint-plugin-unused-imports"
export {
  configs as tseslintConfig,
  plugin as tseslintPlugin,
  parser as tseslintParser,
} from "typescript-eslint"

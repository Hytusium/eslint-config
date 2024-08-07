import _prettierConfig from "eslint-config-prettier"
import _pluginReact from "eslint-plugin-react"
import _pluginReactHooks from "eslint-plugin-react-hooks"
import _pluginUnusedImports from "eslint-plugin-unused-imports"
import { config, type ConfigWithExtends } from "typescript-eslint"

import type {
  PluginReact,
  PluginReactHooks,
  PluginUnusedImports,
  PrettierConfig,
} from "./plugin-types.js"

export const prettierConfig: PrettierConfig =
  _prettierConfig satisfies PrettierConfig
export const pluginReact: PluginReact = _pluginReact satisfies PluginReact
export const pluginReactHooks: PluginReactHooks =
  _pluginReactHooks satisfies PluginReactHooks
export const pluginUnusedImports: PluginUnusedImports =
  _pluginUnusedImports satisfies PluginUnusedImports

export function mergeConfig(...configs: ConfigWithExtends[]) {
  return config(...configs)
}

export { FlatCompat } from "@eslint/eslintrc"
export { default as eslint } from "@eslint/js"
export { default as pluginImport } from "eslint-plugin-import-x"
export { default as pluginNode } from "eslint-plugin-n"
export { default as pluginUnicorn } from "eslint-plugin-unicorn"
export {
  configs as tseslintConfig,
  plugin as tseslintPlugin,
  parser as tseslintParser,
} from "typescript-eslint"

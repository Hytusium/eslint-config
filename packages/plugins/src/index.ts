import _prettierConfig from "eslint-config-prettier"
import _pluginImport from "eslint-plugin-import"
import _pluginReactHooks from "eslint-plugin-react-hooks"
import {
  config,
  type ConfigArray,
  type ConfigWithExtends,
} from "typescript-eslint"

import type {
  PluginReactHooks,
  PrettierConfig,
  PluginImport,
} from "./plugin-types.js"

export const prettierConfig: PrettierConfig =
  _prettierConfig satisfies PrettierConfig
export const pluginReactHooks: PluginReactHooks =
  _pluginReactHooks satisfies PluginReactHooks
export const pluginImport: PluginImport = _pluginImport satisfies PluginImport

export function mergeConfig(...configs: ConfigWithExtends[]): ConfigArray {
  return config(...configs)
}

export { default as eslint } from "@eslint/js"
export { default as pluginNode } from "eslint-plugin-n"
export { default as pluginUnusedImports } from "eslint-plugin-unused-imports"
export { default as pluginReact } from "eslint-plugin-react"
export {
  configs as tseslintConfig,
  plugin as tseslintPlugin,
  parser as tseslintParser,
  type ConfigArray,
} from "typescript-eslint"

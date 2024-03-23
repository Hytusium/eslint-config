import { config, type ConfigWithExtends } from "typescript-eslint"

export function mergeConfig(...configs: ConfigWithExtends[]) {
  return config(...configs)
}

export { FlatCompat } from "@eslint/eslintrc"
export { default as eslint } from "@eslint/js"
export { default as prettierConfig } from "eslint-config-prettier"
export { default as pluginImport } from "eslint-plugin-import"
export { default as pluginNode } from "eslint-plugin-n"
export { default as pluginUnicorn } from "eslint-plugin-unicorn"
export { default as pluginUnusedImports } from "eslint-plugin-unused-imports"
export { default as pluginReact } from "eslint-plugin-react"
export { default as pluginReactHooks } from "eslint-plugin-react-hooks"
export {
  configs as tseslintConfig,
  plugin as tseslintPlugin,
  parser as tseslintParser,
} from "typescript-eslint"

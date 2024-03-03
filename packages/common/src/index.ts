import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginImport from "eslint-plugin-import"
import pluginUnusedImport from "eslint-plugin-unused-imports"

const config = tseslint.config(
  eslint.configs.recommended
)

export default config

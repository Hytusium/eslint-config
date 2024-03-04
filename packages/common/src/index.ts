import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginImport from "eslint-plugin-import"
import pluginUnusedImports from "eslint-plugin-unused-imports"
import pluginNode from "eslint-plugin-n"

// Config transformer
const compat = new FlatCompat()

/**
 * Common/Base config in all @hytusium projects.
 */
const config = tseslint.config(
  // set plugin rule keys
  {
    plugins: {
      ["import"]: pluginImport,
      ["unused-imports"]: pluginUnusedImports,
      ["n"]: pluginNode
    },
  },
  {
    ignores: ["**/node_modules/**", "**/.yarn/**", "**/dist/**"],
  },

  // extends
  // * eslint recommended
  eslint.configs.recommended,
  // * eslint-plugin-n recommended
  pluginNode.configs["flat/recommended"],
  // * eslint-plugin-import recommended (transform LegacyConfig to FlatConfig using `FlatCompat`)
  ...compat.config(pluginImport.configs.recommended),

  // rules
  {
    rules: {
      // eslint-plugin-n rules
      // * enforce using the `node:` protocol when importing Node.js builtin modules.
      "n/prefer-node-protocol": "warn",

      // eslint-plugin-unused-imports rules
      "unused-imports/no-unused-imports": "error",

      // eslint-plugin-import rules
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [
            // * place *.css at last
            {
              pattern: "**.css",
              group: "type",
              position: "after",
            },
          ],
          // * warn when `import *.css` is not last
          warnOnUnassignedImports: true,
        },
      ],
    },
  }
)

export default config

import {
  FlatCompat,
  eslint,
  pluginImport,
  pluginUnusedImports,
  pluginNode,
  pluginUnicorn,
  mergeConfig,
} from "@hytusium/eslint-plugins"

// Config transformer
const compat = new FlatCompat()

// ignore files
const ignoreFiles = ["**/node_modules/**", "**/.yarn/**", "**/dist/**"]

/**
 * Common/Base config in all @hytusium projects.
 */
const config = mergeConfig(
  // set plugin rule keys
  {
    plugins: {
      ["import-x"]: pluginImport,
      ["unused-imports"]: pluginUnusedImports,
    },
  },
  {
    ignores: ignoreFiles,
  },

  // extends
  {
    extends: [
      // * eslint recommended
      eslint.configs.recommended,
      // * eslint-plugin-n recommended
      pluginNode.configs["flat/recommended"],
      // * eslint-plugin-import recommended (transform LegacyConfig to FlatConfig using `FlatCompat`)
      ...compat.config(pluginImport.configs.recommended),
      // * eslint-plugin-unicorn recommended
      pluginUnicorn.configs["flat/recommended"],
    ],
  },

  // rules
  {
    rules: {
      // eslint-plugin-unicorn rules
      // * enforce using the `node:` protocol when importing Node.js builtin modules.
      "unicorn/prefer-node-protocol": "error",

      // eslint-plugin-unused-imports rules
      "unused-imports/no-unused-imports": "error",

      // eslint-plugin-import rules
      "import-x/order": [
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

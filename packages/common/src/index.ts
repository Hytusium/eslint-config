import {
  FlatCompat,
  eslint,
  pluginImport,
  pluginUnusedImports,
  pluginNode,
  pluginUnicorn,
  mergeConfig,
  fixupConfigRules,
  fixupPluginRules,
} from "@hytusium/eslint-plugins"

// Config transformer
const compat = new FlatCompat()

/**
 * Common/Base config in all @hytusium projects.
 */
const config = mergeConfig(
  // set plugin rule keys
  {
    plugins: {
      ["import"]: fixupPluginRules(pluginImport),
      ["unused-imports"]: pluginUnusedImports,
    },
  },

  // extends
  // * eslint recommended
  eslint.configs.recommended,
  // * eslint-plugin-n recommended
  pluginNode.configs["flat/recommended"],
  // * eslint-plugin-import recommended (transform LegacyConfig to FlatConfig using `FlatCompat`)
  ...fixupConfigRules(compat.config(pluginImport.configs.recommended)),
  // * eslint-plugin-unicorn recommended
  pluginUnicorn.configs["flat/recommended"],

  // rules
  {
    rules: {
      // eslint-plugin-unicorn rules
      // * enforce using the `node:` protocol when importing Node.js builtin modules.
      "unicorn/prefer-node-protocol": "error",

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

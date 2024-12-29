import {
  eslint,
  pluginImport,
  pluginUnusedImports,
  pluginNode,
  mergeConfig,
  type ConfigArray,
} from "@hytusium/eslint-plugins"

/**
 * Common/Base config in all @hytusium projects.
 */
const config: ConfigArray = mergeConfig(
  // set plugin rule keys
  {
    plugins: {
      ["node"]: pluginNode,
      ["unused-imports"]: pluginUnusedImports,
    },
  },

  // extends
  // * eslint recommended
  eslint.configs.recommended,
  // * eslint-plugin-n recommended
  pluginNode.configs["flat/recommended"],
  // * eslint-plugin-import recommended
  pluginImport.flatConfigs.recommended,

  // rules
  {
    rules: {
      // eslint-plugin-node rules
      "node/prefer-node-protocol": "error",

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

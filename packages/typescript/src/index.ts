import tseslint from "typescript-eslint"
import pluginImport, { rules } from "eslint-plugin-import"
import commonConfig, { ignoreFiles } from "@hytusium/eslint-config-common"
import { FlatCompat } from "@eslint/eslintrc"

// Config transformer
const compat = new FlatCompat()

const config = tseslint.config(
  {
    plugins: {
      ["@typescript-eslint"]: tseslint.plugin,
    },
    ignores: ignoreFiles,
  },

  // extends
  {
    extends: [
      // * @hytusium/eslint-config-common
      ...commonConfig,
      // * @typescript-eslint recommended-type-checked
      ...tseslint.configs.recommendedTypeChecked,
      // * eslint-pluigin-import typescript
      ...compat.config(pluginImport.configs.typescript),
    ],
  },

  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": [
        "error",
        {
          extendDefaults: true,
          types: {
            "{}": false,
          },
        },
      ],
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      // v6 rules
      "@typescript-eslint/no-duplicate-type-constituents": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      // for eslint-plugin-unused-imports
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
)

export default config

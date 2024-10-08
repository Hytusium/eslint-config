import commonConfig from "@hytusium/eslint-config-common"
import {
  FlatCompat,
  mergeConfig,
  tseslintPlugin,
  tseslintConfig,
  pluginImport,
} from "@hytusium/eslint-plugins"

// Config transformer
const compat = new FlatCompat()

const config = mergeConfig(
  {
    plugins: {
      ["@typescript-eslint"]: tseslintPlugin,
    },
  },

  // extends
  // * @hytusium/eslint-config-common
  ...commonConfig,
  // * @typescript-eslint recommended-type-checked
  ...tseslintConfig.recommendedTypeChecked,
  // * eslint-pluigin-import typescript
  ...compat.config(pluginImport.configs.typescript),

  {
    // settings
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".cts", "mts"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
      // ignore .d.ts files for projectService
      "import/ignore": [".d.ts$"],
    },

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // rules
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
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

      // * https://typescript-eslint.io/troubleshooting/typed-linting/performance/
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "off",
    },
  }
)

export default config

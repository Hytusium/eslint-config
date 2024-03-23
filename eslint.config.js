import typescriptConfig from "@hytusium/eslint-config-typescript"
import { mergeConfig, prettierConfig } from "@hytusium/eslint-plugins"

export default mergeConfig(
  {
    extends: [
      // * @hytusium/eslint-config-typescript
      ...typescriptConfig,
      // * eslint-config-prettier
      prettierConfig,
    ],
  },

  // base options
  {
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.eslint.json", "packages/*/tsconfig.json"],
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: ["tsconfig.eslint.json", "packages/*/tsconfig.json"],
        },
      },
    },
  }
)

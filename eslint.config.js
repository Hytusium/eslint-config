import typescriptConfig from "@hytusium/eslint-config-typescript"
import prettierConfig from "eslint-config-prettier"
import tseslint from "typescript-eslint"

export default tseslint.config(
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
  }
)

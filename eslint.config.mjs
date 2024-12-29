import typescriptConfig from "@hytusium/eslint-config-typescript"
import { mergeConfig, prettierConfig } from "@hytusium/eslint-plugins"

const ignoreFiles = ["**/node_modules/**", "**/dist/**"]

export default mergeConfig(
  {
    ignores: ignoreFiles,
  },

  // extends
  // * @hytusium/eslint-config-typescript
  ...typescriptConfig,
  // * eslint-config-prettier
  prettierConfig,

  // base options
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            "scripts",
            "eslint.config.mjs",
            "prettier.config.mjs",
          ],
          defaultProject: "./tsconfig.json",
        },

        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
)

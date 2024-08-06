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
        projectService: {
          allowDefaultProject: ["*.js"],
          defaultProject: "./tsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import-x/resolver": {
        typescript: {
          projectService: {
            allowDefaultProject: ["*.js"],
            defaultProject: "./tsconfig.json",
          },
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
  }
)

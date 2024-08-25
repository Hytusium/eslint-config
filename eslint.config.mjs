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
        // TODO: remove project after projectService is fixed.
        project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],

        /**
         * FIXME: projectService is not working.
         *
         * ```
         * Error while parsing <packages>/index.d.ts
         * Line undefined, column undefined: <packages>/index.d.ts was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject.
         * `parseForESLint` from parser `@typescript-eslint/parser` is invalid and will just be ignored
         * ```
         */
        // projectService: {
        //   allowDefaultProject: [
        //     "scripts",
        //     "eslint.config.mjs",
        //     "prettier.config.mjs",
        //   ],
        // },

        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
)

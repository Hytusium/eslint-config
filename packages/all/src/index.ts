import reactConfig from "@hytusium/eslint-config-react"
import typescriptConfig from "@hytusium/eslint-config-typescript"
import prettierConfig from "eslint-config-prettier"
import tseslint from "typescript-eslint"

const config = tseslint.config(
  // extends
  {
    extends: [
      // * @hytusium/eslint-config-react
      ...reactConfig,
      // * @hytusium/eslint-config-typescript
      ...typescriptConfig,
      // * eslint-config-prettier
      prettierConfig,
    ],
  }
)

export default config

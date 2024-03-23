import reactConfig from "@hytusium/eslint-config-react"
import typescriptConfig from "@hytusium/eslint-config-typescript"
import { mergeConfig, prettierConfig } from "@hytusium/eslint-plugins"

const config = mergeConfig(
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

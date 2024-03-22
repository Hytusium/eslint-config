declare module "eslint-plugin-unicorn" {
  import type {
    ClassicConfig,
    FlatConfig,
    Linter,
  } from "@typescript-eslint/utils/ts-eslint"

  declare const exprt: {
    configs: {
      recommended: ClassicConfig.Config
      all: ClassicConfig.Config
      "flat/recommended": FlatConfig.Config
      "flat/all": FlatConfig.Config
    }
    rules: NonNullable<Linter.Plugin["rules"]>
  }
  export = exprt
}

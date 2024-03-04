declare module "eslint-plugin-n" {
  import type { ClassicConfig, FlatConfig, Linter } from "@typescript-eslint/utils/ts-eslint"

  declare const exprt: {
    configs: {
      "flat/recommended": FlatConfig.Config
      "flat/recommended-module": FlatConfig.Config
      "flat/recommended-script": FlatConfig.Config
      "flat/mixed-esm-and-cjs": FlatConfig.Config
      recommended: ClassicConfig.Config
      "recommended-module": ClassicConfig.Config
      "recommended-script": ClassicConfig.Config
    }
    rules: NonNullable<Linter.Plugin["rules"]>
  }
  export = exprt
}

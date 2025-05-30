import commonConfig from "@hytusium/eslint-config-common"
import type { ConfigArray } from "@hytusium/eslint-plugins"
import {
  mergeConfig,
  pluginImport,
  pluginReact,
  pluginReactHooks,
} from "@hytusium/eslint-plugins"

const config: ConfigArray = mergeConfig(
  {
    plugins: {
      ["react"]: pluginReact,
      ["react-hooks"]: pluginReactHooks,
    },
  },

  // extends
  // * @hytusium/eslint-config-common
  ...commonConfig,
  // * eslint-plugin-react recommended
  pluginReact.configs.flat.recommended!,
  // * eslint-plugin-react jsx-runtime
  pluginReact.configs.flat["jsx-runtime"]!,
  // * eslint-plugin-import react
  pluginImport.flatConfigs.react,

  {
    // settings
    settings: {
      react: {
        version: "detect",
      },
    },

    // rules
    rules: {
      // * eslint-plugin-react-hooks recommended
      ...pluginReactHooks.configs.recommended.rules,
      // * Disallow missing props validation in a React component definition
      "react/prop-types": "off",
      // * Enforce consistent usage of destructuring assignment of props, state, and context
      "react/destructuring-assignment": "error",
      // * Enforce a specific function type for function components
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: ["function-declaration", "function-expression"],
        },
      ],
      // * Ensure destructuring and symmetric naming of useState hook value and setter variables
      "react/hook-use-state": "error",
      // * Enforce boolean attributes notation in JSX
      "react/jsx-boolean-value": "error",
      // * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
      "react/jsx-curly-brace-presence": "error",
      // * Enforce shorthand or standard form for React fragments
      "react/jsx-fragments": "error",
      // * Disallow .bind() or arrow functions in JSX props
      "react/jsx-no-bind": "error",
      // * Disallows JSX context provider values from taking values that will cause needless rerenders
      "react/jsx-no-constructed-context-values": "error",
      // * Disallow unnecessary fragments
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      // * Enforce PascalCase for user-defined JSX components
      "react/jsx-pascal-case": "error",
      // * Enforce props alphabetical sorting
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandLast: true,
          reservedFirst: true,
          multiline: "last",
        },
      ],
      // * Disallow usage of Array index in keys
      "react/no-array-index-key": "error",
      // * Disallow usage of dangerous JSX properties
      "react/no-danger": "error",
      // * Enforce that props are read-only
      "react/prefer-read-only-props": "warn",
      // * Disallow extra closing tags for components without children
      "react/self-closing-comp": "warn",
    },
  },

  // Override rules
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "react/prop-types": "error",
    },
  }
)

export default config

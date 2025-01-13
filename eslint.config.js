import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: { jsx: true },
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },

    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "import/prefer-default-export": "error",

      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: false,
        },
      ],
      semi: ["error", "always"],

      "no-console": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 1 }],
      "max-lines": [
        "error",
        {
          max: 100,
          skipBlankLines: true, // Skip blank lines when counting
          skipComments: true, // Skip lines containing only comments
        },
      ],
    },
  },
];

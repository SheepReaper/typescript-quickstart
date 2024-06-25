import tsParser from "@typescript-eslint/parser";
import tsEslint from "@typescript-eslint/eslint-plugin";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.mts"],
    plugins: {
      tsEslint,
    },
    languageOptions: {
      parser: tsParser,
      project: "./tsconfig.json",
    },
  },
  prettierConfig,
];

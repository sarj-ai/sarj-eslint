module.exports = {
  rules: {
    "zod-naming-convention": require("./rules/zod-naming-convention"),
    "require-assert-never": require("./rules/require-assert-never"),
    "require-zod-form-validation": require("./rules/require-zod-form-validation"),
    "enforce-file-structure": require("./rules/enforce-file-structure"),
  },
  configs: {
    recommended: {
      plugins: ["sarj-eslint"],
      rules: {
        "sarj-eslint/zod-naming-convention": "warn",
        "sarj-eslint/require-assert-never": "error",
        "sarj-eslint/require-zod-form-validation": "error",
        "sarj-eslint/enforce-file-structure": "warn",
      },
    },
  },
};

module.exports = {
  rules: {
    "zod-naming-convention": require("./rules/zod-naming-convention"),
  },
  configs: {
    recommended: {
      plugins: ["sarj-eslint"],
      rules: {
        "sarj-eslint/zod-naming-convention": "warn",
      },
    },
  },
};

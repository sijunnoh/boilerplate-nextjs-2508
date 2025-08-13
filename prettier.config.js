module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  bracketSpacing: true,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: ["^react$", "<THIRD_PARTY_MODULES>", "^[@]+/", "^[.]+/"],
  importOrderSeparation: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}

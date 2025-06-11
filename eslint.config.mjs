// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // configure html-self-closing for SFC
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
        },
      },
    ],
  },
});

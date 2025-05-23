import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon"],

  app: {
    head: {
      title: "La Croutounz",
      htmlAttrs: { lang: "fr" },
      link: [
        {
          rel: "preload",
          href: "/fonts/MonaSans[slnt,wdth,wght].woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});

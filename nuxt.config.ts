import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  components: [
    {
      path: "~/components/atoms",
      pathPrefix: false,
    },
  ],
  buildModules: ["@pinia/nuxt"],
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});

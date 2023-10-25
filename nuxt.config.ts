// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icons", "@nuxtjs/google-fonts"],
  css: ["~/assets/styles/main.scss"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
  app: {
    baseURL: "/",
  },
});

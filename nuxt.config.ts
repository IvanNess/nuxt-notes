export default defineNuxtConfig({
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser"
  },
  vite: {
    define: {
      "window.global": {}
    }
  }
});

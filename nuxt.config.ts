// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-open-fetch'],
  css: ['~/assets/scss/main.scss'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  openFetch: {
    clients: {
      pets: {
        schema: 'https://petstore3.swagger.io/api/v3/openapi.yaml',
        baseURL: 'https://petstore3.swagger.io/api/v3/',
      },
    },
  },
})

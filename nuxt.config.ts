// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  ssr: false,

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/eslint'],

  vue: {
    compilerOptions: {
      // Vue needs to be configured to recognize Web Components
      // Treats any tag containing a hyphen as a custom element
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
})
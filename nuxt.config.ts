// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt', 
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  css:[
    "@/assets/css/main.scss",
  ],
  elementPlus: {
    importStyle: 'scss',
    themeChalk: {
      $colors: {
        primary: {
          base: 'rgb(0,119,204)',
        },
      },
    },
  },
  app: {
    baseURL: '/',
    head: {
      title: 'RMCD - Airconditioning System Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'Airconditioning System Services', name: 'RMCD', content: 'RMCD - Airconditioning System Services' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    preset: 'vercel' // Required for Vercel
  }
})
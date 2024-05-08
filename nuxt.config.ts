// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', "vue3-carousel-nuxt",'@vueuse/nuxt'],
  css: [
    '~/assets/css/main.css'
  ],
})
import { createClient } from '@nuxtjs/sanity'
import fetch from 'node-fetch'
if (!globalThis.fetch) {
  globalThis.fetch = fetch
}
const configSanity = {
    projectId: 'aymdxoqg',
    dataset: 'production',
    useCdn: false,
}
const client = createClient(configSanity)

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nobelno23-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      'plugins/sanity-image-builder.js',
      'plugins/preview.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/sanity/module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap',
    'nuxt-gsap-module'
  ],

  image: {
    sanity: {
      baseURL: "https://cdn.sanity.io/",
      projectId: 'aymdxoqg',
      dataset: 'production',
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-gsap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': true,
        'autoprefixer': true,
      },
    },
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  

  generate: {
    fallback: true,
},

  router: {
    trailingSlash: true
  },

  sanity: {
    ...configSanity,
    withCredentials: true,
},
}

import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: 'KEY' },
      { name: 'google-site-verification', content: 'KEY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }
    ]
  },

  // Animation
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/app-components.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'KEY'
    // }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: 'KEY',
    //   webvisor: true,
    //   clickmap: true,
    //   trackLinks: true
    // }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: [
    //   'vue',
    //   'axios'
    // ]
  },
  generate: {
    routes() {
      return axios.get('https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/posts.json').then(res => {
        // Get id
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        // Routes
        return postsArray.map(post => {
          return '/blog/' + post.id
        })
      })
    }
  }
}

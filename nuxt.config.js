import hooks from './hooks'

export default {
  router: {
    middleware: ['auth'],
  },

  // Redirecting /dashboard to /dashboard/projects with hooks
  hooks: hooks({
    router: {
      dashboard: '/dashboard/projects',
    }
  }),

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bwabootstrap',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' },
      // { rel: `stylesheet`, type: 'text/css', href: '/css/cosmicgarden.css' },
      // { rel: `stylesheet`, type: 'text/css', href: '/css/gofund.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/cosmicgarden.css',
    '~/assets/css/gofund.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/date-fns',
  ],
  
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: { url: '/api/v1/login', method: 'post' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/v1/me/fetch', method: 'get' }
        }
      }
    }
  },

  axios: {
    baseURL: 'http://localhost:8080'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // // github page repo name
  // router: {
  //   base: '/esteem-club/',
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Esteem Club',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#3b82f6' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Esteem Club is a collection of unique art image parody of technical student . We starts with a collection of 100 character. the season in Esteem Club is called "Semester".',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOriginIsolated: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css', '@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCP_3GGSS9uvx0-vGviDlYakTCsxa5rALY',
          authDomain: 'esteemclub-4068f.firebaseapp.com',
          projectId: 'esteemclub-4068f',
          storageBucket: 'esteemclub-4068f.appspot.com',
          messagingSenderId: '881869788786',
          appId: '1:881869788786:web:f470b944a3b127163514eb',
          measurementId: 'G-LFHGX3FJ5V',
        },
        services: {
          firestore: true,
        },
      },
    ],
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  toast: {
    position: 'bottom-center',
    register: [
      {
        name: 'saved',
        message: 'Data saved',
        options: {
          duration: 1000,
          type: 'success',
        },
      },
      {
        name: 'error',
        message: 'Error! cannot save data',
        options: {
          duration: 1000,
          type: 'error',
        },
      },
    ],
  },
}

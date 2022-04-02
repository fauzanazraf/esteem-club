module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-2': "url('static/hero-bg-2.svg')",
        'hero-3': "url('static/hero-bg-3.svg')",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

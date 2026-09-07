// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // Base site URL used by sitemap/robots modules.
  // Set NUXT_PUBLIC_SITE_URL in production
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || ''
  },

  runtimeConfig: {
    public: {
      // Production domain, e.g. https://keep-app.com — used for canonical,
      // Open Graph and schema.org URLs. Empty falls back to relative URLs.
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || ''
    }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/privacy',
        '/imprint'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  robots: {
    // Allow Google and other respectful bots to index the site.
    disallow: []
  },

  sitemap: {
    strictNuxtContentPaths: false,
    autoLastmod: true
  }
})

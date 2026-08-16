<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#09090b' : 'white')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48 32x32 16x16' },
    { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
    { rel: 'icon', type: 'image/png', href: '/favicon-192.png', sizes: '192x192' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  twitterCard: 'summary_large_image',
  applicationName: 'Keep.'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>

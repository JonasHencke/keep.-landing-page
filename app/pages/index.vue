<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

// Set NUXT_PUBLIC_SITE_URL (e.g. https://keep-app.com) to emit absolute
// canonical/OG/schema.org URLs — crawlers and social scrapers prefer them.
const { siteUrl } = useRuntimeConfig().public
const absoluteUrl = (path: string) => siteUrl ? new URL(path, siteUrl).toString() : path

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'website',
  ogSiteName: 'Keep.',
  ogImage: absoluteUrl('/og-image.png'),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: title,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: absoluteUrl('/og-image.png')
})

useHead({
  link: [
    // Preload the hero image: it is the LCP element on every viewport.
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: page.value.hero.image.src,
      imagesrcset: page.value.hero.image.srcset,
      imagesizes: page.value.hero.image.sizes,
      fetchpriority: 'high'
    },
    ...siteUrl ? [{ rel: 'canonical' as const, href: absoluteUrl('/') }] : []
  ],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      'name': 'Keep. — Photo Cleaner',
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'iOS',
      'description': description,
      'url': siteUrl || undefined,
      'screenshot': absoluteUrl(page.value.hero.image.src),
      'featureList': page.value.hero.highlights.map(highlight => highlight.label)
    })
  }]
})

const heroTitle = computed(() => {
  const [primary = '', ...secondaryParts] = (page.value?.title ?? '').split('\n')

  return {
    primary,
    secondary: secondaryParts.join(' ').trim()
  }
})

function enterMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }
}

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 1 },
    transition: { duration: 0.6, delay }
  }
}

function staggerMotion(index: number = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    inViewOptions: { once: true, amount: 1 },
    transition: { duration: 0.6, delay: index * 0.08 }
  }
}

const { copy, copied } = useClipboard()
</script>

<template>
  <div v-if="page">
    <!-- Hero -->
    <UPageHero
      orientation="horizontal"
      :ui="{
        root: 'pb-16 sm:pb-24',
        container: 'relative z-10 py-16 sm:py-24 lg:py-28 gap-12 sm:gap-y-16 lg:gap-16 lg:grid-cols-[1.1fr_1fr]',
        wrapper: 'text-center lg:text-left',
        title: 'text-4xl sm:text-6xl lg:text-6xl xl:text-7xl tracking-tighter leading-[1.05]',
        description: 'mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-default',
        footer: 'mt-8 sm:mt-10'
      }"
    >
      <template #top>
        <Motion v-bind="staggerMotion(0)">
          <HeroShaders class="absolute top-0 inset-x-0 opacity-15 h-full" />
        </Motion>

        <GradientGlow class="top-0 w-2/3 h-1/2" />
      </template>

      <template #headline>
        <Motion v-bind="enterMotion(0.05)">
          <UBadge
            color="neutral"
            variant="soft"
            :label="page.hero.headline"
            class="rounded-full px-3 py-1.5 gap-1.5 bg-white/5 backdrop-blur"
          >
            <template #leading>
              <UChip
                inset
                standalone
                :ui="{ base: 'animate-pulse ring-0' }"
              />
            </template>
          </UBadge>
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="enterMotion(0.12)"
          class="inline-block"
        >
          {{ heroTitle.primary }}
          <br v-if="heroTitle.secondary">
          <span
            v-if="heroTitle.secondary"
            class="animate-shimmer bg-size-[200%_auto] bg-clip-text text-transparent"
            :style="{
              backgroundImage: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-300), var(--color-primary-200), var(--color-primary-100), var(--color-primary-200), var(--color-primary-300), var(--color-primary-400))',
              animationDuration: '10s'
            }"
          >
            {{ heroTitle.secondary }}
          </span>
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="enterMotion(0.24)"
          class="inline-block"
        >
          {{ page.description }}
        </Motion>
      </template>

      <template #footer>
        <div class="flex flex-col items-center gap-8 lg:items-start">
          <Motion
            class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center lg:justify-start"
            v-bind="enterMotion(0.34)"
          >
            <UButton
              v-for="link in page.hero.links"
              :key="link.label"
              v-bind="link"
              class="w-full justify-center sm:w-auto"
            />
          </Motion>

          <Motion
            as="ul"
            class="flex flex-col items-start gap-x-6 gap-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            v-bind="enterMotion(0.44)"
          >
            <li
              v-for="highlight in page.hero.highlights"
              :key="highlight.label"
              class="flex items-center gap-2 text-sm text-dimmed"
            >
              <UIcon
                :name="highlight.icon"
                class="size-4 shrink-0 text-primary"
              />
              {{ highlight.label }}
            </li>
          </Motion>
        </div>
      </template>

      <Motion
        as-child
        v-bind="enterMotion(0.18)"
      >
        <HeroShowcase
          v-bind="page.hero.image"
          class="mx-auto w-full max-w-80 sm:max-w-105 lg:mx-0 lg:ml-auto lg:max-w-115 xl:max-w-130"
        />
      </Motion>
    </UPageHero>

    <!-- Features -->
    <UPageSection
      id="features"
      :ui="{
        root: 'py-24 sm:py-32 scroll-mt-(--ui-header-height)',
        container: 'max-w-5xl',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: 'max-w-lg mx-auto',
        description: 'max-w-md mx-auto text-dimmed'
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.features.headline }}
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.features.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.features.description }}
        </Motion>
      </template>

      <div class="rounded-2xl border border-default bg-default overflow-hidden">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          <Motion
            v-for="(feature, index) in page.features.items"
            :key="feature.title"
            v-bind="staggerMotion(index)"
          >
            <UPageCard
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
              class="rounded-none duration-300"
              to="#"
              :ui="{
                leading: 'mb-5 flex size-9 justify-center rounded-lg bg-primary/10',
                title: 'text-sm tracking-tight',
                description: 'text-sm leading-relaxed sm:line-clamp-2 lg:line-clamp-3 text-dimmed'
              }"
            />
          </Motion>
        </div>
      </div>
    </UPageSection>

    <!-- Metrics -->
    <UPageSection
      id="metrics"
      :ui="{
        root: 'py-24 sm:py-32 scroll-mt-(--ui-header-height)',
        container: 'max-w-5xl',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: 'max-w-lg mx-auto',
        description: 'max-w-md mx-auto text-dimmed'
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.metrics.headline }}
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.metrics.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.metrics.description }}
        </Motion>
      </template>

      <div class="rounded-2xl border border-default bg-default overflow-hidden">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px">
          <Motion
            v-for="(metric, index) in page.metrics.items"
            :key="metric.label"
            v-bind="staggerMotion(index)"
          >
            <UPageCard
              :title="metric.value"
              :description="metric.label"
              class="rounded-none duration-300"
              to="#"
              :ui="{
                root: 'text-center',
                wrapper: 'items-center',
                title: ['text-4xl font-bold tracking-tight leading-none', metric.class],
                description: 'font-mono text-xs uppercase tracking-[0.06em] text-dimmed mt-3'
              }"
            />
          </Motion>
        </div>
      </div>
    </UPageSection>

    <!-- CTA -->
    <UPageCTA
      variant="naked"
      :ui="{
        root: 'py-24 sm:py-32',
        container: 'max-w-3xl text-center',
        title: 'lg:text-5xl tracking-tighter whitespace-pre-line',
        description: 'mx-auto max-w-sm leading-relaxed text-dimmed'
      }"
    >
      <template #top>
        <GradientGlow class="bottom-0 w-2/3 h-1/2" />
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.cta.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.cta.description }}
        </Motion>
      </template>

      <template #links>
        <Motion
          class="flex flex-col items-center justify-center gap-6"
          v-bind="scrollMotion(0.2)"
        >
          <UButton
            v-for="link in page.cta.links"
            :key="link.label"
            v-bind="link"
            size="xl"
          />

          <UButton
            :label="page.cta.command"
            :trailing-icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
            color="neutral"
            variant="subtle"
            class="font-mono font-light text-toned gap-4"
            size="xl"
            :ui="{ trailingIcon: 'size-5' }"
            @click="copy(page.cta.command)"
          />
        </Motion>
      </template>
    </UPageCTA>
  </div>
</template>

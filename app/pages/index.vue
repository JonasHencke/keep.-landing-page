<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

const page = {
  title: 'Declutter your camera roll.\nFree up storage.',
  description: 'Keep. turns photo cleanup into a single swipe — left to delete, right to keep. Work through screenshots, duplicates and blurry shots and win back gigabytes on your iPhone in minutes.',
  hero: {
    headline: 'Keep. — Photo Cleaner for iPhone',
    image: {
      src: '/images/keep-photo-cleaner-app-880.webp',
      srcset: '/images/keep-photo-cleaner-app-440.webp 440w, /images/keep-photo-cleaner-app-640.webp 640w, /images/keep-photo-cleaner-app-880.webp 880w, /images/keep-photo-cleaner-app-1268.webp 1268w',
      sizes: '(min-width: 1280px) 520px, (min-width: 1024px) 460px, (min-width: 640px) 420px, 320px',
      alt: 'Keep. photo cleaner app running on an iPhone — swipe a photo left to delete it or right to keep it',
      width: 1268,
      height: 1389
    },
    links: [{
      label: 'Download on the App Store',
      icon: 'i-simple-icons-appstore',
      color: 'primary',
      size: 'xl',
      to: '#',
      target: '_blank'
    }, {
      label: 'See how it works',
      size: 'xl',
      color: 'neutral',
      variant: 'soft',
      to: '#how-it-works'
    }],
    highlights: [
      { icon: 'i-lucide-hand', label: 'Swipe left to delete, right to keep' },
      { icon: 'i-lucide-undo-2', label: 'Undo any swipe instantly' },
      { icon: 'i-lucide-folder-plus', label: 'Sort keepers into albums' }
    ]
  },
  howItWorks: {
    headline: 'How it works',
    title: 'Swipe. Sort. Done.',
    description: 'Blurry shots, duplicates, forgotten screenshots — browse your camera roll one by one, swipe or tap to Keep or Remove, and win back gigabytes in minutes.',
    items: [{
      icon: 'i-lucide-calendar-range',
      title: 'Sort by month or album',
      description: 'Tackle your library in manageable chunks instead of staring down thousands of photos at once.'
    }, {
      icon: 'i-lucide-folder-plus',
      title: 'Albums while you sort',
      description: 'Send keepers straight into an album mid-swipe. No extra steps needed.'
    }, {
      icon: 'i-lucide-trash-2',
      title: 'Trash with a safety net',
      description: 'Removed photos wait in the Trash for review — nothing is permanently deleted until you confirm it there.'
    }, {
      icon: 'i-lucide-undo-2',
      title: 'Undo anytime',
      description: 'Change your mind about any removal, or reset your sorting progress whenever you like.'
    }, {
      icon: 'i-lucide-hard-drive-download',
      title: 'Storage you can see',
      description: 'See exactly how much space you\'ve freed up after each cleanup.'
    }, {
      icon: 'i-lucide-lock',
      title: 'Private by design',
      description: 'Keep. never uploads your photos. Everything is processed and stored on your device — no cloud, no tracking, no exceptions.'
    }]
  },
  metrics: {
    headline: 'By the numbers',
    title: 'Built for scale you haven\'t hit yet.',
    description: 'Process billions of events per day across thousands of production environments with an architecture designed for the workloads of 2030.',
    items: [
      { value: '99.99%', label: 'Uptime SLA', class: 'text-success' },
      { value: '<50ms', label: 'P99 query', class: 'text-primary' },
      { value: '14B+', label: 'Events / day', class: 'text-info' },
      { value: '4 min', label: 'Early warning', class: 'text-warning' }
    ]
  },
  cta: {
    title: 'Ready to stop\nfirefighting?',
    description: 'Free for up to 5 services. No credit card. Deploys in under a minute.',
    command: 'npx telemetry init',
    links: [
      { label: 'Start for free', color: 'primary', to: '#' }
    ]
  }
} as const

const title = 'Keep. — Photo Cleaner for iPhone | Declutter & Free Up Storage'
const description = 'Keep. is the swipe-to-sort photo cleaner for iPhone: swipe left to delete, right to keep. Clear out screenshots and duplicates and free up storage fast.'

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
      href: page.hero.image.src,
      imagesrcset: page.hero.image.srcset,
      imagesizes: page.hero.image.sizes,
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
      'screenshot': absoluteUrl(page.hero.image.src),
      'featureList': page.hero.highlights.map(highlight => highlight.label)
    })
  }]
})

const [heroTitlePrimary = '', ...heroTitleRest] = page.title.split('\n')
const heroTitle = {
  primary: heroTitlePrimary,
  secondary: heroTitleRest.join(' ').trim()
}

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
  <div>
    <!-- Hero -->
    <UPageHero
      orientation="horizontal"
      :ui="{
        root: 'pb-16 sm:pb-24',
        container: 'relative z-10 py-16 sm:py-24 lg:py-20 gap-12 sm:gap-y-16 lg:gap-16 lg:grid-cols-[1.1fr_1fr]',
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

    <!-- How it works -->
    <UPageSection
      id="how-it-works"
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
          {{ page.howItWorks.headline }}
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.howItWorks.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.howItWorks.description }}
        </Motion>
      </template>

      <div class="rounded-2xl border border-default bg-default overflow-hidden">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          <Motion
            v-for="(feature, index) in page.howItWorks.items"
            :key="feature.title"
            v-bind="staggerMotion(index)"
          >
            <UPageCard
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
              variant="ghost"
              class="rounded-none duration-300"
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
              variant="ghost"
              class="rounded-none duration-300"
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

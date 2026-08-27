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
      to: 'https://apps.apple.com/app/id6761209065',
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
  screenshots: {
    headline: 'Screenshots',
    title: 'See Keep. in action.',
    description: 'Pick your photo set, swipe through your camera roll one shot at a time, and undo any swipe instantly.',
    items: [
      {
        src: '/images/keep-screenshot-1-880.webp',
        srcset: '/images/keep-screenshot-1-440.webp 440w, /images/keep-screenshot-1-640.webp 640w, /images/keep-screenshot-1-880.webp 880w',
        alt: 'Keep. sort screen — pick your whole library or an album and work through it month by month'
      },
      {
        src: '/images/keep-screenshot-2-880.webp',
        srcset: '/images/keep-screenshot-2-440.webp 440w, /images/keep-screenshot-2-640.webp 640w, /images/keep-screenshot-2-880.webp 880w',
        alt: 'Keep. review screen — swipe left to trash a photo, with Delete and Undo always within reach'
      },
      {
        src: '/images/keep-screenshot-3-880.webp',
        srcset: '/images/keep-screenshot-3-440.webp 440w, /images/keep-screenshot-3-640.webp 640w, /images/keep-screenshot-3-880.webp 880w',
        alt: 'Keep. review screen — swipe right to keep a photo, marked with a green checkmark'
      }
    ]
  },
  faq: {
    headline: 'FAQ',
    title: 'Questions,\nanswered.',
    description: 'Everything you need to know about Keep. before you start swiping.',
    items: [{
      label: 'Does Keep. upload my photos anywhere?',
      content: 'No. Keep. works entirely on your device — your photos are never uploaded to a server, and there is no account or tracking involved.'
    }, {
      label: 'Can I undo a photo I removed by mistake?',
      content: 'Yes. You can undo any swipe instantly while sorting, and removed photos also wait in the Trash until you confirm deletion there — nothing disappears right away.'
    }, {
      label: 'When are my photos actually deleted?',
      content: 'Only after you review and confirm them in the Trash. From there they go to the iOS Recently Deleted album, where Apple keeps them for another 30 days.'
    }, {
      label: 'Can I sort keepers into albums?',
      content: 'Yes. While swiping, you can send any keeper straight into an existing album or create a new one on the fly — no extra steps needed.'
    }, {
      label: 'How much storage can I free up?',
      content: 'It depends on your library, but most users clear out gigabytes of screenshots, duplicates and blurry shots after their first cleanup session. Keep. shows you exactly how much space you\'ve won back.'
    }, {
      label: 'Is Keep. free?',
      content: 'You can try Keep. for free. The full version unlocks with a subscription on the App Store — cancel anytime.'
    }]
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

function staggerMotion(index: number = 0, amount: number = 1) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    inViewOptions: { once: true, amount },
    transition: { duration: 0.6, delay: index * 0.08 }
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <UPageHero
      orientation="horizontal"
      :ui="{
        root: 'pb-12 sm:pb-16',
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

    <!-- Screenshots -->
    <UPageSection
      id="screenshots"
      :ui="{
        root: 'pt-8 sm:pt-12 pb-20 sm:pb-24 scroll-mt-(--ui-header-height)',
        container: 'py-0 sm:py-0 lg:py-0',
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
          {{ page.screenshots.headline }}
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.screenshots.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.screenshots.description }}
        </Motion>
      </template>

      <Motion
        v-bind="staggerMotion(0, 0.2)"
        class="sm:hidden"
      >
        <UCarousel
          v-slot="{ item }"
          :items="[...page.screenshots.items]"
          loop
          dots
          :autoplay="{ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }"
          class="mx-auto max-w-75"
          :ui="{ dots: 'static mt-6' }"
        >
          <figure class="rounded-2xl border border-default overflow-hidden">
            <img
              :src="item.src"
              :srcset="item.srcset"
              sizes="(min-width: 1024px) 310px, (min-width: 640px) 45vw, calc(100vw - 2rem)"
              :alt="item.alt"
              width="1284"
              height="2778"
              loading="lazy"
              decoding="async"
              class="block w-full h-auto"
            >
          </figure>
        </UCarousel>
      </Motion>

      <div class="hidden flex-wrap justify-center gap-4 sm:flex sm:gap-6">
        <Motion
          v-for="(screenshot, index) in page.screenshots.items"
          :key="screenshot.src"
          v-bind="staggerMotion(index, 0.2)"
          class="w-full max-w-75 sm:w-[calc(50%-0.75rem)] sm:max-w-90 lg:w-[calc((100%-4rem)/3)] lg:max-w-none"
        >
          <figure class="rounded-2xl border border-default overflow-hidden">
            <img
              :src="screenshot.src"
              :srcset="screenshot.srcset"
              sizes="(min-width: 1024px) 310px, (min-width: 640px) 45vw, calc(100vw - 2rem)"
              :alt="screenshot.alt"
              width="1284"
              height="2778"
              loading="lazy"
              decoding="async"
              class="block w-full h-auto"
            >
          </figure>
        </Motion>
      </div>
    </UPageSection>

    <!-- How it works -->
    <UPageSection
      id="how-it-works"
      :ui="{
        root: 'pt-8 sm:pt-12 pb-20 sm:pb-24 scroll-mt-(--ui-header-height)',
        container: 'max-w-5xl py-0 sm:py-0 lg:py-0',
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

    <!-- FAQ -->
    <UPageSection
      id="faq"
      :ui="{
        root: 'pt-8 sm:pt-12 pb-20 sm:pb-24 scroll-mt-(--ui-header-height)',
        container: 'max-w-3xl py-0 sm:py-0 lg:py-0',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em] text-center',
        title: 'max-w-lg mx-auto whitespace-pre-line',
        description: 'max-w-md mx-auto text-dimmed'
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          {{ page.faq.headline }}
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          {{ page.faq.title }}
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.2)"
          class="inline-block"
        >
          {{ page.faq.description }}
        </Motion>
      </template>

      <Motion v-bind="scrollMotion(0.3)">
        <UAccordion
          :items="[...page.faq.items]"
          :ui="{
            root: 'gap-3',
            item: 'rounded-xl border border-default bg-default px-5 data-[state=open]:bg-elevated/50',
            trigger: 'text-base font-medium tracking-tight py-4 gap-3',
            content: 'text-sm leading-relaxed text-dimmed pb-5'
          }"
        />
      </Motion>
    </UPageSection>
  </div>
</template>

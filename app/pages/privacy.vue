<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

const sections = [
  {
    title: 'Introduction',
    paragraphs: [
      'This page informs visitors regarding policies with the collection, use, and disclosure of Personal Information if anyone decides to use the Keep. Application.'
    ]
  },
  {
    title: 'Information Being Collected',
    paragraphs: [],
    list: [
      'Purchase history and subscription status (through Apple and RevenueCat).'
    ]
  },
  {
    title: 'How Your Information Is Used',
    paragraphs: [],
    list: [
      'Process and manage subscriptions (via Apple\u2019s App Store and RevenueCat).'
    ]
  },
  {
    title: 'Subscriptions and Payments',
    paragraphs: [
      'All payments and subscriptions are processed securely by Apple via the App Store. No payment information is accessed or stored. Subscription status and entitlements are managed with the help of RevenueCat. Premium users enjoy additional features and an ad-free experience.'
    ]
  },
  {
    title: 'How Your Information Is Shared',
    paragraphs: [
      'Information is only shared with third parties as described in this Privacy Policy. This includes:'
    ],
    list: [
      'Apple, for managing subscriptions and purchases.',
      'RevenueCat, for entitlement and subscription tracking.'
    ],
    afterList: ['Your personal information is not sold.']
  },
  {
    title: 'Changes to This Privacy Policy',
    paragraphs: [
      'This Privacy Policy may be updated from time to time. You are advised to review this page periodically for any changes. Changes are effective immediately after they are posted on this page.'
    ]
  }
]

const contactEmail = 'henckejonas@googlemail.com'

const title = 'Privacy Policy | Keep.'
const description = 'How the Keep. photo cleaner app collects, uses, and shares personal information.'

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
    ...siteUrl ? [{ rel: 'canonical' as const, href: absoluteUrl('/privacy') }] : []
  ]
})
</script>

<template>
  <div>
    <UPageSection
      :ui="{
        root: 'py-16 sm:py-24 scroll-mt-(--ui-header-height)',
        container: 'max-w-3xl py-0 sm:py-0 lg:py-0 text-left',
        headline: 'font-mono font-medium text-xs text-primary uppercase tracking-[0.12em]',
        title: 'tracking-tighter',
        description: 'text-dimmed'
      }"
    >
      <template #headline>
        Legal
      </template>

      <template #title>
        Privacy Policy
      </template>

      <template #description>
        Last updated: 10. May 2026
      </template>

      <div class="flex flex-col gap-8">
        <section
          v-for="section in sections"
          :key="section.title"
          class="flex flex-col gap-3"
        >
          <h2 class="text-lg sm:text-xl font-semibold tracking-tight">
            {{ section.title }}
          </h2>

          <p
            v-for="paragraph in section.paragraphs"
            :key="paragraph"
            class="text-sm leading-relaxed text-dimmed"
          >
            {{ paragraph }}
          </p>

          <ul
            v-if="section.list?.length"
            class="flex flex-col gap-2"
          >
            <li
              v-for="item in section.list"
              :key="item"
              class="flex items-start gap-2 text-sm leading-relaxed text-dimmed"
            >
              <UIcon
                name="i-lucide-minus"
                class="size-4 shrink-0 mt-0.5 text-primary"
              />
              {{ item }}
            </li>
          </ul>

          <p
            v-for="paragraph in section.afterList ?? []"
            :key="paragraph"
            class="text-sm leading-relaxed text-dimmed"
          >
            {{ paragraph }}
          </p>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="text-lg sm:text-xl font-semibold tracking-tight">
            Contact Us
          </h2>

          <p class="text-sm leading-relaxed text-dimmed">
            If you have any questions or suggestions about this Privacy Policy, do not hesitate to contact us at
            <UButton
              :to="`mailto:${contactEmail}`"
              variant="link"
              color="primary"
              size="sm"
              class="px-0 font-normal"
              :label="contactEmail"
            />.
          </p>
        </section>
      </div>
    </UPageSection>
  </div>
</template>

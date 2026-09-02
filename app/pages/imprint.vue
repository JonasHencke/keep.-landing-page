<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

const contactEmail = 'henckejonas@gmail.com'
const contactPhone = '+49 1578 8868681'

const title = 'Legal Notice | Keep.'
const description = 'Provider identification and contact details for Keep.'

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
    ...siteUrl ? [{ rel: 'canonical' as const, href: absoluteUrl('/imprint') }] : []
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
        Legal Notice
      </template>

      <template #description>
        Provider Identification pursuant to § 5 DDG
      </template>

      <div class="flex flex-col gap-8">
        <section class="flex flex-col gap-3">
          <h2 class="text-lg sm:text-xl font-semibold tracking-tight">
            Provider Identification
          </h2>

          <address class="text-sm leading-relaxed text-dimmed not-italic">
            Jonas Hencke<br>
            Hibiskusweg 11<br>
            06122 Halle<br>
            Germany
          </address>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="text-lg sm:text-xl font-semibold tracking-tight">
            Contact
          </h2>

          <div class="flex flex-col items-start gap-1 text-sm leading-relaxed text-dimmed">
            <p>
              E-mail:
              <UButton
                :to="`mailto:${contactEmail}`"
                variant="link"
                color="primary"
                size="sm"
                class="px-0 font-normal"
                :label="contactEmail"
              />
            </p>

            <p>
              Phone:
              <UButton
                :to="`tel:${contactPhone.replaceAll(' ', '')}`"
                variant="link"
                color="primary"
                size="sm"
                class="px-0 font-normal"
                :label="contactPhone"
              />
            </p>
          </div>
        </section>
      </div>
    </UPageSection>
  </div>
</template>

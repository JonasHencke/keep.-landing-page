<script setup lang="ts">
const links = [
  { label: 'App Store', to: '#', target: '_blank' },
  { label: 'Privacy', to: '#' },
  { label: 'Twitter', to: '#', target: '_blank' },
  { label: 'Instagram', to: '#' },
  { label: 'Tik Tok', to: '#' }
]
</script>

<template>
  <UFooter
    :ui="{
      container: 'border-t border-default lg:py-8',
      right: 'gap-x-0 flex-wrap'
    }"
  >
    <template #left>
      <p class="text-sm text-dimmed">
        Jonas Hencke • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        v-for="link in links"
        :key="link.label"
        :label="link.label"
        :to="link.to"
        color="neutral"
        variant="link"
        class="font-light"
        size="sm"
      />
    </template>
  </UFooter>
</template>

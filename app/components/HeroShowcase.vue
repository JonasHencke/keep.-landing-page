<script setup lang="ts">
defineProps<{
  src: string
  srcset?: string
  sizes?: string
  alt: string
  width: number
  height: number
}>()
</script>

<template>
  <div class="relative flex items-center justify-center">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 scale-110 blur-xl"
      style="background: radial-gradient(ellipse at center, color-mix(in oklch, var(--ui-primary) 18%, transparent) 0%, transparent 65%);"
    />

    <img
      :src="src"
      :srcset="srcset"
      :sizes="sizes"
      :alt="alt"
      :width="width"
      :height="height"
      fetchpriority="high"
      decoding="async"
      class="h-auto w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
    >
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /** foreground fill, background text — the docs' emphasis treatment */
    inverted?: boolean
    /** `lg` gives the frame roomier padding */
    size?: 'sm' | 'lg'
  }>(),
  {
    inverted: false,
    size: 'sm',
  },
)
</script>

<template>
  <div class="frame" :class="[size, { inverted }]">
    <slot />
  </div>
</template>

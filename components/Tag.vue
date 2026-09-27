<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'accent' | 'secondary'
  }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <span class="tag" :class="variant === 'default' ? '' : variant">
    <slot />
  </span>
</template>

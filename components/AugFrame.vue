<script setup lang="ts">
withDefaults(
  defineProps<{
    /** top-right + bottom-left cut corners */
    accent?: boolean
    secondary?: boolean
  }>(),
  {
    accent: false,
    secondary: false,
  },
)
</script>

<template>
  <div
    class="aug-frame"
    :class="{ accent, secondary }"
    data-augmented-ui="tr-clip bl-clip both"
  >
    <slot />
  </div>
</template>

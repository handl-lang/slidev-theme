<script setup lang="ts">
withDefaults(
  defineProps<{
    /** foreground fill, background text — the site's emphasis treatment */
    inverted?: boolean
    /** `sm` cuts top-right + bottom-left at 12px; `lg` cuts every corner at --aug-size */
    size?: 'sm' | 'lg'
  }>(),
  {
    inverted: false,
    size: 'sm',
  },
)

const shapes: Record<string, string> = {
  sm: 'tr-clip bl-clip both',
  lg: 'tr-clip bl-clip tl-clip br-clip both',
}
</script>

<template>
  <div
    class="aug-frame"
    :class="[size, { inverted }]"
    :data-augmented-ui="shapes[size]"
  >
    <slot />
  </div>
</template>

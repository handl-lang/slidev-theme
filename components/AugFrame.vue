<script setup lang="ts">
withDefaults(
  defineProps<{
    /** accent border */
    accent?: boolean
    /** magenta border */
    secondary?: boolean
    /** foreground fill, background text */
    inverted?: boolean
    /** `sm` cuts top-right + bottom-left at 12px; `lg` cuts every corner at --aug-size */
    size?: 'sm' | 'lg'
  }>(),
  {
    accent: false,
    secondary: false,
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
    :class="[size, { accent, secondary, inverted }]"
    :data-augmented-ui="shapes[size]"
  >
    <slot />
  </div>
</template>

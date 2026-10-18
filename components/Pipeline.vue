<script setup lang="ts">
withDefaults(
  defineProps<{
    stages: string[]
    delay?: number
  }>(),
  {
    delay: 120,
  },
)
</script>

<template>
  <div class="pipeline">
    <template v-for="(stage, i) in stages" :key="i">
      <div
        v-motion
        class="pipe-stage"
        :initial="{ opacity: 0, y: 8 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: delay + i * 110, duration: 420 } }"
      >
        {{ stage }}
      </div>
      <div
        v-if="i < stages.length - 1"
        v-motion
        class="pipe-link"
        aria-hidden="true"
        :initial="{ scaleX: 0 }"
        :enter="{ scaleX: 1, transition: { delay: delay + i * 110 + 70, duration: 320 } }"
      />
    </template>
  </div>
</template>

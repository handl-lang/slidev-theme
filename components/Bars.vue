<script setup lang="ts">
const props = defineProps<{
  items: { label: string, value: number, display?: string }[]
}>()

const max = Math.max(...props.items.map(i => i.value))
</script>

<template>
  <div class="bars">
    <div v-for="(item, i) in items" :key="i" class="bar">
      <div class="bar-label">{{ item.label }}</div>
      <div class="bar-track">
        <div
          v-motion
          class="bar-fill"
          :initial="{ scaleX: 0 }"
          :enter="{ scaleX: 1, transition: { delay: 160 + i * 130, duration: 700 } }"
          :style="{ width: `${(item.value / max) * 100}%` }"
        />
      </div>
      <div class="bar-value">{{ item.display ?? item.value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { slides, currentSlideNo, isPrintMode } = useNav()

// slides marked `backup: true` are appendix material and don't count
const isBackup = (route: any) => route?.meta?.slide?.frontmatter?.backup === true

const mainNos = computed(() =>
  (slides.value ?? []).filter(r => !isBackup(r)).map(r => r.no),
)
const total = computed(() => mainNos.value.length || 1)
const current = computed(() => {
  const i = mainNos.value.indexOf(currentSlideNo.value)
  return i === -1 ? total.value : i + 1
})

const progress = computed(() => current.value / total.value)
</script>

<template>
  <div class="h-progress" :class="{ 'is-print': isPrintMode }" aria-hidden="true">
    <div class="h-progress-bar" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

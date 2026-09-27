<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { slides, currentSlideNo, currentLayout, isPrintMode } = useNav()

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

const hidden = computed(() => {
  const route = slides.value?.find(r => r.no === currentSlideNo.value)
  // only the closing slide and appendix slides hide the pager
  return isBackup(route) || String(currentLayout.value) === 'end'
})

const pad = (n: number) => String(n).padStart(2, '0')
</script>

<template>
  <div
    v-if="!hidden"
    class="lfds-pager"
    :class="{ 'is-print': isPrintMode }"
    aria-hidden="true"
  >
    <span class="lfds-pager-current">{{ pad(current) }}</span>
    <span class="lfds-pager-sep">/</span>
    <span class="lfds-pager-total">{{ pad(total) }}</span>
  </div>
</template>

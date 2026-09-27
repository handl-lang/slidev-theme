<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentPage, total, currentLayout, isPrintMode } = useNav()

const hidden = computed(() =>
  ['cover', 'intro', 'end'].includes(String(currentLayout.value)),
)

const pad = (n: number) => String(n).padStart(2, '0')
</script>

<template>
  <div
    v-if="!hidden"
    class="lfds-pager"
    :class="{ 'is-print': isPrintMode }"
    aria-hidden="true"
  >
    <span class="lfds-pager-current">{{ pad(currentPage) }}</span>
    <span class="lfds-pager-sep">/</span>
    <span class="lfds-pager-total">{{ pad(total) }}</span>
  </div>
</template>

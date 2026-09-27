<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentPage, total, isPrintMode } = useNav()

const progress = computed(() =>
  total.value <= 0 ? 0 : currentPage.value / total.value,
)
</script>

<template>
  <div class="lfds-progress" :class="{ 'is-print': isPrintMode }" aria-hidden="true">
    <div class="lfds-progress-bar" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

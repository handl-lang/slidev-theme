<script setup lang="ts">
defineProps<{
  items: { title: string, body?: string }[]
}>()
</script>

<template>
  <div class="steps-v">
    <div v-for="(item, i) in items" :key="i" v-click class="step-v">
      <div class="step-v-num">{{ String(i + 1).padStart(2, '0') }}</div>
      <div>
        <div class="step-v-title">{{ item.title }}</div>
        <div v-if="item.body" class="step-v-text">{{ item.body }}</div>
      </div>
    </div>
  </div>
</template>

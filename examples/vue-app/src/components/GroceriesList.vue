<script setup lang="ts">
  const props = defineProps<{
    list: string[]
  }>()

  const emit = defineEmits<{ (e: 'delete', index: number): void }>()
</script>
<template>
  <div class="space-y-2">
    <div class="bg-elevated p-2 flex justify-between" v-for="(item, i) in props.list" :key="i" data-testid="item">
      <span>{{ item }}</span>
      <UButton @click="emit('delete', i)" icon="i-lucide-circle-x" size="md" color="warning" variant="ghost" />
    </div>
  </div>
</template>
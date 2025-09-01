<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { FormSubmitEvent } from '@nuxt/ui/.'
  import * as z from 'zod'

  const form = reactive({
    item: '',
  })

  const state = ref<string[]>([])

  const schema = z.object({
    item: z.string().min(2, 'Must be at least 2 characters')
  })
  type Schema = z.output<typeof schema>

  
  function onSubmit(event: FormSubmitEvent<Schema>) {
    state.value = state.value.concat(event.data.item)
    form.item = ''
  }

  function onDelete(index: number) {
    state.value.splice(index, 1);
  }
</script>

<template>
  <div class="space-y-4">
    <UForm :schema="schema" :state="form" class="space-y-4" @submit="onSubmit">
      <div class="flex w-full">
        <UInput class="flex-1" v-model="form.item" placeholder="item" />
        <UButton type="submit">
          Submit
        </UButton>
      </div>
    </UForm>
    
    <groceries-list :list="state" @delete="onDelete"></groceries-list>
  </div>
</template>
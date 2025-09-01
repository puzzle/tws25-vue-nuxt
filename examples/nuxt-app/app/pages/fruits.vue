<script setup lang="ts">
const { data: fruits, error } = await useFetch("/api/fruits", {
  transform: (data) => Fruit.array().parse(data),
});
</script>

<template>
  <div>
    <h1>Fruits Page ({{ fruits?.length ?? "?" }})</h1>

    <p v-if="error">Error: {{ error.message }}</p>

    <p v-if="!fruits && !error">Loading...</p>

    <ul v-if="fruits">
      <li v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</li>
    </ul>

    <NuxtLink to="/">Go to index page</NuxtLink>
  </div>
</template>

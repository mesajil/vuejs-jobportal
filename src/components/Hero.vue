<template>
  <section class="bg-green-700 text-white text-center py-16">
    <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
    <p class="text-lg">{{ subtitle }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>

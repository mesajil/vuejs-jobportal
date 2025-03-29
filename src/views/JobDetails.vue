<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Job Details</h1>
    <p class="text-lg">Job ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Define the `id` prop passed from the route
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

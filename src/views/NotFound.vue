<template>
  <div class="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    <i class="pi pi-exclamation-triangle text-yellow-500 text-6xl mb-4"></i>
    <h1 class="text-4xl font-bold text-black mb-4">404 - Page Not Found</h1>
    <p class="text-lg text-gray-600 mb-6">The page you are looking for does not exist.</p>
    <RouterLink
      to="/"
      class="px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600"
    >
      Go Back Home
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

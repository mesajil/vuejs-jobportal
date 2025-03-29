<template>
  <nav class="p-4 bg-green-700 flex items-center justify-between">
    <RouterLink to="/" class="flex items-center">
      <img :src="logo" alt="Logo" class="h-10 mr-3" />
      <span class="text-white text-xl font-bold">Vue Jobs</span>
    </RouterLink>
    <div class="flex space-x-4">
      <RouterLink
        to="/"
        class="text-white px-4 py-2 rounded hover:bg-green-800"
        active-class="bg-green-900"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/jobs"
        class="text-white px-4 py-2 rounded hover:bg-green-800"
        active-class="bg-green-900"
      >
        Jobs
      </RouterLink>
      <RouterLink
        to="/jobs/add"
        class="text-white px-4 py-2 rounded hover:bg-green-800"
        active-class="bg-green-900"
      >
        Add Job
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import logo from '@/assets/img/logo.png'
</script>

<style scoped></style>

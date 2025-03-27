<template>
  <div class="flex flex-wrap gap-4">
    <!-- Developer Card -->
    <Card>
      <h2 class="text-xl font-bold mb-2">For Developers</h2>
      <p class="text-gray-600 mb-4">Browse our Vue jobs and start your career today</p>
      <button class="px-4 py-2 bg-black text-white font-bold rounded">Browse Jobs</button>
    </Card>

    <!-- Employer Card -->
    <Card bg="bg-green-100">
      <h2 class="text-xl font-bold mb-2">For Employers</h2>
      <p class="text-gray-600 mb-4">List your job to find the perfect developer for the role</p>
      <button class="px-4 py-2 bg-green-600 text-white font-bold rounded">Add Job</button>
    </Card>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
</script>

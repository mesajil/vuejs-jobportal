<template>
  <div class="grid sm:grid-cols-2 gap-6 mt-6 mb-12 mx-6">
    <!-- Developer Card -->
    <Card class="w-full lg:w-120 ml-auto">
      <h2 class="text-xl font-bold mb-2">For Developers</h2>
      <p class="text-gray-600 mb-4">Browse our Vue jobs and start your career today</p>
      <RouterLink
        to="/jobs"
        class="px-4 py-2 bg-black text-white font-bold rounded w-full hover:bg-gray-800"
      >
        Browse Jobs
      </RouterLink>
    </Card>

    <!-- Employer Card -->
    <Card class="w-full lg:w-120 bg-green-100 mr-auto">
      <h2 class="text-xl font-bold mb-2">For Employers</h2>
      <p class="text-gray-600 mb-4">List your job to find the perfect developer for the role</p>
      <RouterLink
        to="/jobs/add"
        class="px-4 py-2 bg-green-600 text-white font-bold rounded w-full hover:bg-green-700"
      >
        Add Job
      </RouterLink>
    </Card>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
</script>

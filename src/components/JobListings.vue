<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Browse Jobs</h1>
    <div class="grid gap-6">
      <JobListing v-for="job in jobs.slice(0, limit)" :key="job.id" :job="job" />
    </div>
  </div>

  <!-- View All Jobs Button -->
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>

<script setup>
import jobData from '@/jobs.json'
import { ref } from 'vue'
import JobListing from './JobListing.vue'

defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
  limit: {
    type: Number,
    default: Infinity,
  },
})

const jobs = ref(jobData)
</script>

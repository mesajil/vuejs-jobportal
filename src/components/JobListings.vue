<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Browse Jobs</h1>

    <!-- Spinner -->
    <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
      <PulseLoader />
    </div>

    <!-- Job Listings -->
    <div v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <JobListing v-for="job in state.jobs.slice(0, limit)" :key="job.id" :job="job" />
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
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import JobListing from './JobListing.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

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

const state = reactive({
  jobs: [],
  isLoading: true,
})

// Fetch jobs from the API on component mount
onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs')
    state.jobs = response.data
  } catch (error) {
    console.error('Error fetching jobs:', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
      <PulseLoader />
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-6">
      <div class="flex flex-col gap-6 col-span-2">
        <!-- Job Info -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-sm text-green-600 font-semibold">{{ state.job.type }}</p>
          <h1 class="text-3xl font-bold text-gray-800 mt-2">{{ state.job.title }}</h1>
          <p class="text-lg text-red-600 mt-2">{{ state.job.location }}</p>
        </div>

        <!-- Company Info -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Company Info</h2>
          <p class="text-lg font-bold text-gray-800">{{ state.job.company.name }}</p>
          <p class="text-gray-600 mb-4">{{ state.job.company.description }}</p>
          <p class="text-lg font-bold text-gray-800">Contact Email:</p>
          <p class="text-green-600 mb-4">{{ state.job.company.contactEmail }}</p>
          <p class="text-lg font-bold text-gray-800">Contact Phone:</p>
          <p class="text-green-600">{{ state.job.company.contactPhone }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <!-- Job Description -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Job Description</h2>
          <p class="text-gray-600 mb-4">{{ state.job.description }}</p>
          <h3 class="text-lg font-bold text-gray-800">Salary</h3>
          <p class="text-green-600">{{ state.job.salary }}</p>
        </div>

        <!-- Manage Job -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Manage Job</h2>
          <div class="grid lg:grid-cols-1 sm:grid-cols-2 gap-4">
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class="block w-full bg-green-500 text-white font-bold py-2 px-4 rounded text-center hover:bg-green-600"
            >
              Edit Job
            </RouterLink>
            <button
              class="block w-full bg-red-500 text-white font-bold py-2 px-4 rounded text-center hover:bg-red-600"
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const route = useRoute()

const state = reactive({
  job: null,
  isLoading: true,
})

// Fetch job details from the API
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8000/jobs/${route.params.id}`)
    state.job = response.data
  } catch (error) {
    console.error('Error fetching job details:', error)
  } finally {
    state.isLoading = false
  }
})
</script>

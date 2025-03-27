<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Browse Jobs</h1>
    <div class="grid gap-6">
      <div
        v-for="job in jobs"
        :key="job.id"
        class="bg-white shadow-md rounded-lg p-6 border border-gray-200"
      >
        <p class="text-sm text-green-600 font-semibold">{{ job.type }}</p>
        <h2 class="text-xl font-bold text-gray-800 mt-2">{{ job.title }}</h2>
        <p class="text-gray-600 mt-2">{{ job.description }}</p>
        <p class="text-green-600 font-semibold mt-4">{{ job.salary }} / Year</p>
        <p class="text-gray-500 mt-2 flex items-center">
          <span class="material-icons text-red-500 mr-1">place</span>
          {{ job.location }}
        </p>
        <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import jobData from '@/jobs.json'
import { ref } from 'vue'
const jobs = ref(jobData)
</script>

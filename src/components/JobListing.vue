<template>
  <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
    <p class="text-sm text-green-600 font-semibold">{{ job.type }}</p>
    <h2 class="text-xl font-bold text-gray-800 mt-2">{{ job.title }}</h2>

    <!-- Job Description with More/Less button -->
    <p class="text-gray-600 mt-2">{{ getJobDescription }}</p>
    <button
      v-if="!jobDescLengthOk"
      :onclick="toggleShowText"
      class="mt-2 text-green-500 hover:text-green-600"
    >
      {{ !showText ? 'More' : 'Less' }}
    </button>

    <p class="text-green-600 font-semibold mt-4">{{ job.salary }} / Year</p>
    <div class="flex flex-col lg:flex-row justify-between items-center mt-4">
      <p class="text-gray-500 flex items-center">
        <i class="pi pi-map-marker text-orange-700 mr-1"></i>
        {{ job.location }}
      </p>
      <RouterLink
        :to="`/job/${job.id}`"
        class="mt-4 lg:mt-0 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Read More
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const { job } = defineProps({
  job: {
    type: Object,
    required: true,
  },
})
const maxJobDescLength = 90
const jobDescLengthOk = ref(job.description.length < maxJobDescLength)
const showText = ref(false)
const toggleShowText = () => {
  showText.value = !showText.value
}
const getJobDescription = computed(() => {
  if (jobDescLengthOk.value) return job.description
  return showText.value ? job.description : `${job.description.slice(0, maxJobDescLength)} ...`
})
</script>

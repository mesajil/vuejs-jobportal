<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
      <PulseLoader />
    </div>
    <div v-else>
      <form
        @submit.prevent="submitForm"
        class="bg-white shadow-md rounded-lg p-6 space-y-4 md:w-[600px] mx-auto"
      >
        <h1 class="text-3xl font-bold mb-6 text-center">Edit Job</h1>
        <!-- Job Type -->
        <div>
          <label for="type" class="block text-gray-700 font-bold mb-2">Job Type</label>
          <select
            id="type"
            v-model="form.type"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <!-- Job Title -->
        <div>
          <label for="title" class="block text-gray-700 font-bold mb-2">Job Title</label>
          <input
            id="title"
            type="text"
            v-model="form.title"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
            placeholder="Enter job title"
            required
          />
        </div>

        <!-- Job Description -->
        <div>
          <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            v-model="form.description"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
            placeholder="Enter job description"
          ></textarea>
        </div>

        <!-- Salary -->
        <div>
          <label for="salary" class="block text-gray-700 font-bold mb-2">Salary</label>
          <select
            id="salary"
            v-model="form.salary"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
          >
            <option value="Under $50K">Under $50K</option>
            <option value="$50K - $60K">$50K - $60K</option>
            <option value="$60K - $70K">$60K - $70K</option>
            <option value="$70K - $80K">$70K - $80K</option>
            <option value="$80K - $90K">$80K - $90K</option>
            <option value="$90K - $100K">$90K - $100K</option>
            <option value="$100K - $125K">$100K - $125K</option>
            <option value="$125K - $150K">$125K - $150K</option>
            <option value="$150K - $175K">$150K - $175K</option>
            <option value="$175K - $200K">$175K - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </div>

        <!-- Location -->
        <div>
          <label for="location" class="block text-gray-700 font-bold mb-2">Location</label>
          <input
            id="location"
            type="text"
            v-model="form.location"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
            placeholder="Enter job location"
          />
        </div>

        <!-- Company Info -->
        <div>
          <label for="company-name" class="block text-gray-700 font-bold mb-2">Company Name</label>
          <input
            id="company-name"
            type="text"
            v-model="form.company.name"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label for="company-description" class="block text-gray-700 font-bold mb-2"
            >Company Description</label
          >
          <textarea
            id="company-description"
            v-model="form.company.description"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
            placeholder="Enter company description"
          ></textarea>
        </div>
        <div>
          <label for="contact-email" class="block text-gray-700 font-bold mb-2"
            >Contact Email</label
          >
          <input
            id="contact-email"
            type="email"
            v-model="form.company.contactEmail"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
            placeholder="Enter contact email"
          />
        </div>
        <div>
          <label for="contact-phone" class="block text-gray-700 font-bold mb-2"
            >Contact Phone</label
          >
          <input
            id="contact-phone"
            type="tel"
            v-model="form.company.contactPhone"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
            placeholder="Enter contact phone"
          />
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: 'Under $50K',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})

const state = reactive({
  job: {},
  isLoading: true,
})

// Fetch job data and pre-fill the form
onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${route.params.id}`)
    Object.assign(form, response.data) // Pre-fill form with job data
  } catch (error) {
    console.error('Error fetching job data:', error)
    toast.error('Failed to load job data.')
  } finally {
    state.isLoading = false // Set loading to false after fetching
  }
})

// Submit form to update job
const submitForm = async () => {
  const confirm = window.confirm('Are you sure you want to update this job?')
  if (confirm) {
    try {
      await axios.put(`/api/jobs/${route.params.id}`, form)
      toast.success('Job updated successfully!')
      router.push(`/job/${route.params.id}`) // Redirect to job details page
    } catch (error) {
      console.error('Error updating job:', error)
      toast.error('Failed to update job.')
    }
  }
}
</script>

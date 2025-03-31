<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <form
      @submit.prevent="submitForm"
      class="bg-white shadow-md rounded-lg p-6 space-y-4 md:w-[600px] mx-auto"
    >
      <h1 class="text-3xl font-bold mb-6 text-center">Add Job</h1>
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
        <label for="contact-email" class="block text-gray-700 font-bold mb-2">Contact Email</label>
        <input
          id="contact-email"
          type="email"
          v-model="form.company.contactEmail"
          class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
          placeholder="Enter contact email"
        />
      </div>
      <div>
        <label for="contact-phone" class="block text-gray-700 font-bold mb-2">Contact Phone</label>
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
</template>

<script setup>
import router from '@/router'
import { reactive } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

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

const toast = useToast()

const submitForm = async () => {
  try {
    const response = await axios.post('/api/jobs', form)
    toast.success('Job Added Successfully')
    router.push(`/job/${response.data.id}`)
  } catch (error) {
    console.error('Error adding job:', error)
    toast.error('Job Was Not Added')
  }
}
</script>

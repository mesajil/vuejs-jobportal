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
        <input
          id="salary"
          type="text"
          v-model="form.salary"
          class="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-500"
          placeholder="Enter salary range"
        />
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
          type="text"
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
import { reactive } from 'vue'
import axios from 'axios'

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})

const submitForm = async () => {
  try {
    const response = await axios.post('/api/jobs', form)
    console.log('Job added successfully:', response.data)
    alert('Job added successfully!')
  } catch (error) {
    console.error('Error adding job:', error)
    alert('Failed to add job.')
  }
}
</script>

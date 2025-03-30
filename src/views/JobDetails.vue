<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-6">
      <div class="flex flex-col gap-6 col-span-2">
        <!-- Job Info -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-sm text-green-600 font-semibold">Full-Time</p>
          <h1 class="text-3xl font-bold text-gray-800 mt-2">Senior Vue Developer</h1>
          <p class="text-lg text-red-600 mt-2">Boston, MA</p>
        </div>

        <!-- Company Info -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Company Info</h2>
          <p class="text-lg font-bold text-gray-800">NewTek Solutions</p>
          <p class="text-gray-600 mb-4">
            NewTek Solutions is a leading technology company specializing in web development and
            digital solutions. We pride ourselves on delivering high-quality products and services
            to our clients while fostering a collaborative and innovative work environment.
          </p>
          <p class="text-lg font-bold text-gray-800">Contact Email:</p>
          <p class="text-green-600 mb-4">contact@newteksolutions.com</p>
          <p class="text-lg font-bold text-gray-800">Contact Phone:</p>
          <p class="text-green-600">555-555-5555</p>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <!-- Job Description -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Job Description</h2>
          <p class="text-gray-600 mb-4">
            We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal
            candidate will have strong skills in HTML, CSS, and JavaScript, with experience working
            with modern JavaScript frameworks such as Vue or Angular.
          </p>
          <h3 class="text-lg font-bold text-gray-800">Salary</h3>
          <p class="text-green-600">$70k - $80k / Year</p>
        </div>

        <!-- Manage Job -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Manage Job</h2>
          <button
            class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-green-600"
          >
            Edit Job
          </button>
          <button class="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600">
            Delete Job
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Define the `id` prop passed from the route
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

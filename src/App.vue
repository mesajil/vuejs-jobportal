<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import HeroCards from './components/HeroCards.vue'
import JobListings from './components/JobListings.vue'
</script>

<template>
  <Navbar />
  <Hero title="Become a Vue Dev" subtitle="Find the Vue job that fits your skills and needs"></Hero>
  <HeroCards />
  <JobListings :show-button="true" />
</template>

<style scoped></style>

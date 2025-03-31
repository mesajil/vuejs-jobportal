<script setup>
import Hero from '@/components/Hero.vue'
import HeroCards from '@/components/HeroCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <Hero title="Become a Vue Dev" subtitle="Find the Vue job that fits your skills and needs"></Hero>
  <HeroCards />
  <JobListings :show-button="true" :limit="3" />
</template>

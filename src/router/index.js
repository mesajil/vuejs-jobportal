import AddJob from '@/views/AddJob.vue'
import Home from '@/views/Home.vue'
import JobDetails from '@/views/JobDetails.vue'
import Jobs from '@/views/Jobs.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/job/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,
  },
  {
    path: '/jobs/add',
    name: 'AddJob',
    component: AddJob,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Restore the saved scroll position
      return savedPosition
    } else {
      // Scroll to the top of the page
      return { top: 0 }
    }
  },
})

export default router
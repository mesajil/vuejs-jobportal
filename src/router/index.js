import AddJob from '@/views/AddJob.vue'
import EditJob from '@/views/EditJob.vue'
import Home from '@/views/Home.vue'
import JobDetails from '@/views/JobDetails.vue'
import Jobs from '@/views/Jobs.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/job/:id',
    name: 'job-details',
    component: JobDetails,
    props: true,
  },
  {
    path: '/jobs/add',
    name: 'add-job',
    component: AddJob,
  },
  {
    path: '/jobs/edit/:id',
    name: 'edit-job',
    component: EditJob,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
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
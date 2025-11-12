import { createRouter, createWebHistory } from 'vue-router'
import PatientList from '@/PatientList.vue'
import PatientDetail from '@/PatientDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PatientList',
      component: PatientList
    },
    {
      path: '/patient/:id',
      name: 'PatientDetail',
      component: PatientDetail
    }
  ]
})

export default router


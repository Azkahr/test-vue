import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/transaction/Index.vue'
import CreateView from '../views/transaction/Create.vue'
import EditView from '../views/transaction/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'transaction.index',
    component: IndexView
  },
  {
    path: '/create',
    name: 'transaction.create',
    component: CreateView
  },
  {
    path: '/edit/:id',
    name: 'transaction.edit',
    component: EditView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


const routes = [
  {
    path: '/login',
    component: () => import('layouts/Login.vue'),
  },

  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/create', component: () => import('pages/CreateUser.vue') },
      { path: '/update/:id', component: () => import('pages/UpdateUser.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes


const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('layouts/Login.vue'),
     meta: { requiresAuth: false },
  },

  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
     meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'),  meta: { requiresAuth: true }  },
      { path: '/create', component: () => import('pages/CreateUser.vue'),  meta: { requiresAuth: true } },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
     meta: { requiresAuth: false },
  }
]

export default routes


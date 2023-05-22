import { boot } from 'quasar/wrappers'

export default boot(async ({ router }) => {
  router.beforeEach((to, from, next) => {
    const token = sessionStorage.token;

    const requiresAuth = to.matched.some(recordedRoute => recordedRoute.meta.requiresAuth)
    if (requiresAuth && !token) {
      next({ path: '/login' })
    } else {
      next()
    }
  });
})

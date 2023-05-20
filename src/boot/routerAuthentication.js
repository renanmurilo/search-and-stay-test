import { boot } from 'quasar/wrappers'

export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here, like calling an API endpoint
    let token = sessionStorage.token;

  if (!token) {
    next("/login");
  } else {
    next();
  }
  })
})

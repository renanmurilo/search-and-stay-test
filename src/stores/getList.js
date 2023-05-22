import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const userStore = defineStore('store', {
  id: 'users',
  state: () => ({
    users: {}
  }),
  actions: {
    async fetchUsers() {
      await api.get('house_rules')
        .then(users => this.users = users.data.data)
        .catch(error => this.users = { error })
        console.log(this.users);
    },
  },
})

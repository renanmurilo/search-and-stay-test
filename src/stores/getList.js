import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const userStore = defineStore('store', {
  id: 'users',
  state: () => ({
    users: {},
    pagination: {}
  }),
  actions: {
    async fetchUsers(number) {
      try {
        const {data} = await api.get(`house_rules?page=${number}`)
        this.users = data.data
        this.pagination = data.data.pagination
      } catch (error) {
        console.log(error)
      }
    },
  },
})

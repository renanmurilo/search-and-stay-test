import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useStore = defineStore('store', {
  state: () => ({
    list: null,
  }),
  // getters: {
  //   getList() {
  //     return this.list = [state.list].map((list) => list.entities)
  //   }
  // },
  actions: {
    async fetchData() {
      try {
        const response = await api.get('house_rules')
        console.log(response.data, 'dentro');
        this.list = [response.data].map((list) => list.entities)
      } catch (error) {
        console.error(error)
      }
    },
  },
})

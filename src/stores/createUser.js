import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useCreatePaciente = defineStore('create', {
  actions: {
    async register(name) {
      try {
        await api.post('house_rules', {
          house_rules: {
            name: name,
            active: 1
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})

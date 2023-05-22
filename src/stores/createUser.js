import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useCreatePaciente = defineStore('create', {
  actions: {
    async register(user) {
      try {
        await api.post('house_rules', {
          house_rules: user
        })

        location.href = '/dashboard';
      } catch (error) {
        console.log(error)
      }
    }
  }
})

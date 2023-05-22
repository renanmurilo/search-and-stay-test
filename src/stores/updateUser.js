import { defineStore } from 'pinia'
import { userStore } from 'stores/getList';
import { api } from 'boot/axios'

export const useUpdateStore = defineStore('update', {
  actions: {
    async updateUser(user) {
      try {
        await api.put(`house_rules/${user.id}`, {
          house_rules: {
            name: user.name,
            active: user.active
          }
        });

        const usersStore = userStore();
        usersStore.fetchUsers();
      } catch (error) {
        console.log(error)
      }
    }
  }
})


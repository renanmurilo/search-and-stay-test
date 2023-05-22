import { defineStore } from 'pinia'
import { userStore } from 'stores/getList';
import { api } from 'boot/axios'

export const useDeleteStore = defineStore('delete', {
  actions: {
    async deletUser(id) {
      try {
        await api.delete(`house_rules/${id}`);

        const usersStore = userStore();
        usersStore.fetchUsers();
      } catch (error) {
        console.log(error)
      }
    }
  }
})

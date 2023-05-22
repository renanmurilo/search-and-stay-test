<template>
    <q-page class="row justify-start">
        <div class="q-pa-md row items-start q-gutter-md">
            <div
                v-for="(list, index) in users.entities"
                :key="index"
                class="flex"
            >
                <q-card class="my-card col-md-4">
                    <q-card-section>
                        <h5 class="text-subtitle1 text-weight-medium">
                            {{ list.name }}
                        </h5>
                    </q-card-section>

                    <a href="" @click.stop.prevent="deleteUser(list.id)">
                        <q-icon
                            name="delete"
                            color="negative"
                            size="32px"
                            class="absolute-bottom-right q-mb-md q-mr-md"
                        />
                    </a>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from 'stores/getList';
import { useDeleteStore } from 'stores/deleteUser';

const usersStore = userStore();
const { users } = storeToRefs(usersStore);

usersStore.fetchUsers();

const userDelete = useDeleteStore();
const deletUser = userDelete.deletUser;

function deleteUser(id) {
    this.deletUser(id);
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 250px
  max-width: 250px
  height: 250px
</style>


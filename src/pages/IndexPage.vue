<template>
    <q-page class="row justify-start wrap">
        <div class="q-pa-md row justify-center items-center q-gutter-md">
            <div v-for="(list, index) in users.entities" :key="index">
                <q-card class="my-card col-md-4">
                    <q-card-section>
                        <h5
                            class="text-subtitle1 text-weight-medium"
                            v-if="edit !== list.id"
                        >
                            {{ list.name }}
                        </h5>

                        <q-input
                            filled
                            v-model="list.name"
                            label="Your name *"
                            lazy-rules
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    'Please type something',
                            ]"
                            v-if="edit === list.id"
                        />

                        <q-toggle
                            label="Active"
                            v-model="list.active"
                            :false-value="0"
                            :true-value="1"
                            :disable="edit !== list.id"
                        />
                    </q-card-section>

                    <a
                        href=""
                        @click.stop.prevent="teste(list.id)"
                        v-if="edit !== list.id"
                    >
                        <q-icon
                            name="edit"
                            color="dark"
                            size="28px"
                            class="absolute-bottom-left q-mb-md q-ml-md"
                        />
                    </a>

                    <a
                        href=""
                        @click.stop.prevent="editUser(list)"
                        v-if="edit === list.id"
                    >
                        <q-icon
                            name="done"
                            color="dark"
                            size="28px"
                            class="absolute-bottom-left q-mb-md q-ml-md"
                        />
                    </a>

                    <a
                        href=""
                        @click.stop.prevent="deleteUser(list.id)"
                        v-if="edit !== list.id"
                    >
                        <q-icon
                            name="delete"
                            color="negative"
                            size="32px"
                            class="absolute-bottom-right q-mb-md q-mr-md"
                        />
                    </a>
                </q-card>
            </div>

            <div
                class="row justify-center items-center content-center col-md-12"
            >
                <q-pagination
                    v-model="pagination.current_page"
                    :max="pagination.total_pages"
                    direction-links
                    color="primary"
                    @click.stop.prevent="changePage(pagination.current_page)"
                />
            </div>
        </div>
    </q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from 'stores/getList';
import { useDeleteStore } from 'stores/deleteUser';
import { useUpdateStore } from 'stores/updateUser';
import { Dialog } from 'quasar';
import { useQuasar } from 'quasar';
import { ref, reactive, computed } from 'vue';

const usersStore = userStore();
const { users, pagination } = storeToRefs(usersStore);

usersStore.fetchUsers();

const userDelete = useDeleteStore();
const deletUser = userDelete.deletUser;

const $q = useQuasar();

function deleteUser(id) {
    $q.dialog({
        title: 'Alert',
        message: 'Deseja Excluir esses usuário?',
    }).onOk(() => {
        this.deletUser(id);
    });
}

const edit = ref(false);
const name = reactive({ name: null });
const userUpdate = useUpdateStore();
const updateUser = userUpdate.updateUser;

function teste(i) {
    if (this.edit === false) {
        this.edit = i;
    }
}

function editUser(user) {
    $q.dialog({
        title: 'Alert',
        message: 'Usuário atualizado',
    }).onOk(() => {
        this.updateUser(user);
        this.edit = false;
    });
}

function changePage(page) {
    usersStore.fetchUsers(page);
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 250px
  max-width: 250px
  min-height: 250px
</style>


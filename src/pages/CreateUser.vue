<template>
    <q-page class="row justify-center items-center content-center">
        <div class="q-pa-md col-md-6" style="max-width: 400px">
            <h1 class="text-center text-h2 text-weight-medium">Create</h1>
            <q-form @submit="onSubmit" class="q-gutter-md">
                <q-input
                    filled
                    v-model="user.name"
                    label="Your name *"
                    hint="Name and surname"
                    lazy-rules
                    :rules="[
                        (val) =>
                            (val && val.length > 0) || 'Please type something',
                    ]"
                />

                <q-toggle
                    v-model="user.active"
                    :false-value="0"
                    :true-value="1"
                />

                <div>
                    <q-btn
                        label="Submit"
                        type="submit"
                        color="primary"
                        size="20px"
                        style="width: 100%"
                    />
                </div>
            </q-form>
        </div>
    </q-page>
</template>

<script>
import { reactive } from 'vue';
import { useCreatePaciente } from 'stores/createUser';

export default {
    setup() {
        const create = useCreatePaciente();
        const user = reactive({
            name: null,
            active: 0,
        });

        return {
            user,
            register: create.register,
        };
    },
    methods: {
        onSubmit() {
            this.register(this.user);
        },
    },
};
</script>

<template>
    <q-layout>
        <q-page-container>
            <q-page class="row justify-center items-center content-center">
                <div class="q-pa-md col-md-6" style="max-width: 400px">
                    <h1 class="text-center text-h2 text-weight-medium">
                        Login
                    </h1>
                    <q-form @submit="onSubmit" class="q-gutter-md">
                        <q-input
                            filled
                            type="email"
                            v-model="email"
                            label="Your e-mail *"
                            lazy-rules
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    'Please type your email',
                            ]"
                        />

                        <q-input
                            filled
                            type="password"
                            v-model="password"
                            label="Your password *"
                            lazy-rules
                            :rules="[
                                (val) =>
                                    (val !== null && val !== '') ||
                                    'Please type your password',
                            ]"
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
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginPage',
    setup() {
        const $router = useRouter();

        const email = ref('teste@teste.com');
        const password = ref('123456');

        return {
            email,
            password,

            onSubmit() {
                sessionStorage.token =
                    'Bearer 40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8';
                $router.push('/dashboard');
            },
        };
    },
};
</script>

<style>
</style>

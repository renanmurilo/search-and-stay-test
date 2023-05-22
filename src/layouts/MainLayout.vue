<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <div class="row col-md-12 justify-center">
                <router-link
                    to="/dashboard"
                    class="q-pa-md no-outline text-white text-h5"
                    exact
                    style="text-decoration: none"
                >
                    Users
                </router-link>
                <router-link
                    to="/create"
                    class="q-pa-md no-outline text-white text-h5"
                    exact
                    style="text-decoration: none"
                >
                    Create
                </router-link>
            </div>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'MainLayout',
};
</script>

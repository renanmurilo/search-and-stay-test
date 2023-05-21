<script>
import { useStore } from 'stores/getList';

export default {
    name: 'IndexPage',
    setup() {
        const store = useStore();

        return {
            fetchData: store.fetchData,
            data: store.list,
        };
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <q-page class="flex flex-center">
        <div v-for="(list, index) in data" :key="index">
            <q-card class="my-card">
                <q-card-section> {{ list }} </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>


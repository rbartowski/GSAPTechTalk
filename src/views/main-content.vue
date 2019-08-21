<template>
    <div class="main-content">
        <intro v-if="currentPage === 0"></intro>
        <excercise-one v-if="currentPage === 1"></excercise-one>
    </div>
</template>

<script>
    import ExcerciseOne from './excercise-one.vue';
    import Intro from './intro.vue';
    import store from '../store/store.js';

    export default {
        name: "main-content",
        components: {
            ExcerciseOne,
            Intro,
        },
        data: () => ({
        }),
        computed: {
            currentPage() {
                return store.state.currentPage;
            },
        },
    };
</script>

<style scoped>
    .main-content {
        width: 100vw;
        height: 100vh;
    }
</style>


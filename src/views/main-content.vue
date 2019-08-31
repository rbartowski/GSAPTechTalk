<template>
    <div class="main-content">
        <intro v-if="currentPage === 0"></intro>
        <main-menu v-if="currentPage === 1"></main-menu>
        <excercise-one v-if="currentPage === 2"></excercise-one>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import ExcerciseOne from './excercise-one.vue';
    import Intro from './intro.vue';
    import MainFooter from './footer.vue';
    import MainMenu from './menu.vue';
    import store from '../store/store.js';

    export default {
        name: "main-content",
        components: {
            ExcerciseOne,
            Intro,
            MainMenu,
            MainFooter,
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


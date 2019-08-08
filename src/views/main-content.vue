<template>
    <div class="main-content">
        <excercise-one></excercise-one>
    </div>
</template>

<script>
    import ExcerciseOne from './excercise-one.vue';

    export default {
        name: "main-content",
        components: {
            ExcerciseOne,
        },
        data: () => ({
        }),
    }
</script>

<style scoped>
    .main-content {
        width: 100vw;
        height: 100vh;
    }
</style>


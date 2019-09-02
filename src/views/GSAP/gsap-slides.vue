<template>
    <div class="gsapSlidesContainer">
        gsap slides
    </div>
</template>
<script>

    import store from '../../store/store.js';
    import pages from '../../store/pageIndex.js';

    export default {
        name: 'gsap-slides',
        computed: {
            currentPage() {
                return store.state.currentPage;
            },
            pageIndex() {
                return pages;
            },
        },
    }
</script>
<style lang="scss" scoped>
    .gsapSlidesContainer {
        width: 100%;
        height: 100%;
        position: fixed;
        color: white;
    }
</style>
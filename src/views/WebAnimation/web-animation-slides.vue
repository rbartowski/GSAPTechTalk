<template>
    <div class="webAnimationSlidesContainer">
        web animation Slides
    </div>
</template>
<script>

    import store from '../../store/store.js';
    import pages from '../../store/pageIndex.js';

    export default {
        name: 'web-animation-slides',
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
    .webAnimationSlidesContainer {
        width: 100%;
        height: 100%;
        position: fixed;
        color: white;
    }
</style>
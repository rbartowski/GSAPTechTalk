<template>
    <div class="animation101SlidesContainer">
        <brief-story v-if="currentPage === pageIndex.STORY"></brief-story>
        <core-concepts v-if="currentPage === pageIndex.CONCEPTS"></core-concepts>
        <interpolation v-if="currentPage === pageIndex.INTERPOLATION"></interpolation>
    </div>
</template>
<script>

    import store from '../../store/store.js';
    import pages from '../../store/pageIndex.js';
    import CoreConcepts from './Slides/core-concepts.vue';
    import BriefStory from './Slides/brief-story.vue';
    import Interpolation from './Slides/interpolation.vue';

    export default {
        name: 'animation-101-slides',
        components: {
            BriefStory,
            CoreConcepts,
            Interpolation,
        },
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
    .animation101SlidesContainer {
        width: 100%;
        height: 100%;
        position: fixed;
        color: white;
    }
</style>
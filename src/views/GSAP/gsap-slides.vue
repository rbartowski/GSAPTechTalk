<template>
    <div class="gsapSlidesContainer">
        <why-gsap v-if="currentPage === pageIndex.WHY_GSAP"></why-gsap>
        <tween-max-slide v-if="currentPage === pageIndex.TWEENMAX"></tween-max-slide>
        <timeline-max-slide v-if="currentPage === pageIndex.TIMELINEMAX"></timeline-max-slide>
        <easing v-if="currentPage === pageIndex.EASING"></easing>
        <cheat-sheet v-if="currentPage === pageIndex.CHEAT_SHEET"></cheat-sheet>
    </div>
</template>
<script>

    import store from '../../store/store.js';
    import pages from '../../store/pageIndex.js';
    import WhyGsap from './Slides/why-gsap.vue';
    import CheatSheet from './Slides/cheat-sheet.vue';
    import TweenMaxSlide from './Slides/tween-max.vue';
    import TimelineMaxSlide from './Slides/timeline-max.vue';
    import Easing from './Slides/easing.vue';

    export default {
        name: 'gsap-slides',
        components: {
            WhyGsap,
            TweenMaxSlide,
            TimelineMaxSlide,
            Easing,
            CheatSheet,
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
    .gsapSlidesContainer {
        width: 100%;
        height: 100%;
        position: fixed;
        color: white;
    }
</style>
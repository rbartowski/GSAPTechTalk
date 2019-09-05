<template>
    <div class="main-content">
        <intro v-if="currentPage === pageIndex.INTRO"></intro>
        <main-menu v-if="currentPage === pageIndex.MAIN_MENU"></main-menu>
        <animation-101-slides v-if="isDisplayingAnimationSlides"></animation-101-slides>
        <web-animation-slides v-if="isDisplayingWebAnimationSlides"></web-animation-slides>
        <gsap-slides v-if="isDisplayingGSAPSlides"></gsap-slides>
        <excercise-one v-if="currentPage === pageIndex.EXCERCISE"></excercise-one>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import pages from '../store/pageIndex.js';
    import ExcerciseOne from './excercise-one.vue';
    import Intro from './intro.vue';
    import MainFooter from './footer.vue';
    import MainMenu from './menu.vue';
    import store from '../store/store.js';
    import Animation101Slides from './Animation101/animation-101-slides.vue';
    import WebAnimationSlides from './WebAnimation/web-animation-slides.vue';
    import GsapSlides from './GSAP/gsap-slides.vue';

    export default {
        name: "main-content",
        components: {
            ExcerciseOne,
            Intro,
            MainMenu,
            MainFooter,
            Animation101Slides,
            WebAnimationSlides,
            GsapSlides,
        },
        data: () => ({
        }),
        computed: {
            currentPage() {
                return store.state.currentPage;
            },
            pageIndex() {
                return pages;
            },
            isDisplayingAnimationSlides() {
                return [pages.STORY, pages.CONCEPTS, pages.INTERPOLATION].includes(this.currentPage);
            },
            isDisplayingWebAnimationSlides() {
                return [pages.CSS, pages.CSS_KEYFRAMES, pages.CANVAS, pages.LIBS].includes(this.currentPage);
            },
            isDisplayingGSAPSlides() {
                return [pages.WHY_GSAP, pages.TWEENMAX, pages.TIMELINEMAX, pages.EASING, pages.CHEAT_SHEET].includes(this.currentPage);
            }
        },
    };
</script>

<style scoped>
    .main-content {
        width: 100vw;
        height: 100vh;
    }
</style>


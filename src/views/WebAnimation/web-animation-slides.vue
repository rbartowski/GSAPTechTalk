<template>
    <div class="webAnimationSlidesContainer">
        <css-animation v-if="currentPage === pageIndex.CSS"></css-animation>
        <css-keyframes v-if="currentPage === pageIndex.CSS_KEYFRAMES"></css-keyframes>
        <canvas-animation v-if="currentPage === pageIndex.CANVAS"></canvas-animation>
        <js-libs v-if="currentPage === pageIndex.LIBS"></js-libs>
    </div>
</template>
<script>
    import store from '../../store/store.js';
    import pages from '../../store/pageIndex.js';
    import CssAnimation from './Slides/css-animation.vue';
    import CssKeyframes from './Slides/css-keyframes.vue';
    import CanvasAnimation from './Slides/canvas-animation.vue';
    import JsLibs from './Slides/js-libs.vue';

    export default {
        name: 'web-animation-slides',
        components: {
            CssAnimation,
            CssKeyframes,
            CanvasAnimation,
            JsLibs,
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
    .webAnimationSlidesContainer {
        width: 100%;
        height: 100%;
        position: fixed;
        color: white;
    }
</style>
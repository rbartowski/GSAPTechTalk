<template>
    <div class="jsLibAnimation slideContainer">
        <div class="title">
            <h2>JS LIBS</h2>
        </div>
        <div class="contentContainer">
            <a>
                <img src="../../../img/greensock.svg" alt="greensock"/>
            </a>
            <a>
                <img src="../../../img/three.png" alt="threejs"/>
            </a>
            <a>
                <img src="../../../img/animejs.gif" alt="animejs"/>
            </a>
            <a>
                <img src="../../../img/popmotion.png" alt="popmotion"/>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'js-libs',
        mounted() {
            this.setElements();
            this.displayAnimation();
        },
        methods: {
            setElements() {
                this.title = this.$el.querySelector('.title h2');
                this.content = this.$el.querySelector('.contentContainer');
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.content, 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1});
            },
        },
    };
</script>
<style lang="scss" scoped>
    .jsLibAnimation {
        background-image: url('../../../img/andyroomsky.jpg');

        .contentContainer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            height: 50vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            max-width: 1440px;
            border-radius: 3px;

            a {
                width: 25%;
                height: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 65%;
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        }
    }
</style>
<template>
    <div class="coreConceptsContainer slideContainer">
        <div class="title">
            <h2>CORE CONCEPTS</h2>
        </div>
        <div class="contentContainer">
            <div class="keyFrameAnimation">
                <h3>KEY FRAMES</h3>
                <img src="../../../img/alien.png" alt="alien" />
            </div>
            <div class="inBetweenAnimation">
                <h3>IN BETWEENS</h3>
                <img src="../../../img/alien.png" alt="alien" />
            </div>
        </div>
    </div>
</template>
<script>
    import {TimelineMax} from 'gsap';

    export default {
        name: 'core-concepts',
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
        }
    }
</script>
<style lang="scss" scoped>
    .coreConceptsContainer {
        background-image: url('../../../img/andyroomsky.jpg');

        .title {
            h2 {
                opacity: 0;
            }
        }

        .contentContainer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            height: 60vh;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;

            div {
                background-color: white;
                margin: 15px;
                height: 100%;

                h3 {
                    color: black;
                    font-family: 'Indie Flower', cursive;
                    font-size: 1.5rem;
                    text-align: center;
                }

                img {
                    padding: 5px;
                    height: 70%;
                }
            }

            .keyFrameAnimation {
                img {
                    animation: alienKeyFrames 4s infinite;
                }
            }

            .inBetweenAnimation {
                img {
                    animation: inBetweens 4s infinite;
                }
            }

            @keyframes alienKeyFrames {
                0% {
                    transform: rotate(0);
                }
                25% {
                    transform: rotate(90deg);
                }
                50% {
                    transform: rotate(180deg);
                }
                75% {
                    transform: rotate(270deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes inBetweens {
                0% {
                    transform: rotate(0);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }
    }
</style>
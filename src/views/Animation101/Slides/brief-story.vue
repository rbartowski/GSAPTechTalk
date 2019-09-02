<template>
    <div class="briefStoryContainer slideContainer">
        <div class="title">
            <h2>A BRIEF HISTORY OF ANIMATION</h2>
        </div>
        <div class="timelineContainer">
            <div class="timelineItem">
                <img src="../../../img/phenakisticope.gif" alt="firstItem" />
                <span>Phenakisticope - 1833</span>
            </div>
            <div class="timelineItem">
                <img src="../../../img/horse.gif" alt="firstItem" />
                <span>Muybridge - 1872</span>
            </div>
            <div class="timelineItem">
                <img src="../../../img/willie.gif" alt="firstItem" />
                <span>Steamboat Willie - 1928</span>
            </div>
            <div class="timelineItem">
                <img src="../../../img/penelope.gif" alt="firstItem" />
                <span>Hanna Barbera - 1957</span>
            </div>
            <div class="timelineItem">
                <img src="../../../img/buzz.gif" alt="firstItem" />
                <span>Toy Story - 1995</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {TimelineMax} from 'gsap';

    export default {
        name: 'brief-story',
        mounted() {
            this.setElements();
            this.displayAnimation();
        },
        methods: {
            setElements() {
                this.title = this.$el.querySelector('.title h2');
                this.timelineContainer = this.$el.querySelector('.timelineContainer');
                this.timelineItems = this.$el.querySelectorAll('.timelineItem');
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.timelineContainer, 0.5, {
                    opacity: 0,
                    scale: 0,
                }, {
                    opacity: 1,
                    scale: 1,
                })
                .staggerTo(this.timelineItems, 1, {opacity:1}, 1, '+=0.5');
            },
        }
    }
</script>
<style lang="scss" scoped>
    .briefStoryContainer {
        background-image: url('../../../img/andyroomsky.jpg');

        .title {
            h2 {
                opacity: 0;
                width: 100%;
            }
        }

        .timelineContainer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            display: flex;
            max-width: 98vw;
            background-color: white;
            border-radius: 3px;
            height: 50vh;
            opacity: 0;

            .timelineItem {
                flex-grow: 1;
                height: 100%;
                padding: 10px;
                opacity: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                img {
                    height: 50%;
                    max-width: 16vw;
                }

                span {
                    padding: 20px;
                    color: black;
                    font-size: 1.5rem;
                    font-family: 'Raleway', sans-serif;
                }
            }
        }
    }
</style>
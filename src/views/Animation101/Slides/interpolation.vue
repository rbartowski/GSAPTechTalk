<template>
    <div class="interpolationContainer slideContainer">
        <div class="title">
            <h2>INTERPOLATION</h2>
        </div>
        <div class="contentContainer">
            <div class="linearInterpolation">
                <div class="topContainer">
                    <h3>Linear</h3>
                    <img class="hamm" src="../../../img/hamm.png" />
                </div>
                <img class="graphic" src="../../../img/linearInterpolation.png" />
            </div>
            <div class="bezierInterpolation">
                <div class="topContainer">
                    <h3>Bézier</h3>
                    <img class="hamm" src="../../../img/hamm.png" />
                </div>
                <img class="graphic" src="../../../img/bezierCurve.png" />
            </div>
        </div>
    </div>
</template>
<script>
    import {TimelineMax} from 'gsap';

    export default {
        name: 'interpolation',
        mounted() {
            this.setElements();
            this.displayAnimation();
        },
        methods: {
            setElements() {
                this.title = this.$el.querySelector('.title h2');
                this.contentContainer = this.$el.querySelector('.contentContainer');
                this.linearGraphic = this.$el.querySelector('.linearInterpolation .graphic');
                this.bezierGraphic = this.$el.querySelector('.bezierInterpolation .graphic');
                this.linearHamm = this.$el.querySelector('.linearInterpolation .hamm');
                this.bezierHamm = this.$el.querySelector('.bezierInterpolation .hamm');
            },
            displayAnimation() {
                const tl = new TimelineMax();
                const tlLinearHamm = new TimelineMax({repeat: -1});
                const tlBezierHamm = new TimelineMax({repeat: -1});

                tlLinearHamm.to(this.linearHamm, 1, {
                    y: `${this.linearGraphic.offsetHeight}px`,
                })
                .to(this.linearHamm, 1, {
                    y: 0,
                })

                tlBezierHamm.to(this.bezierHamm, 1, {
                    y: `${this.bezierGraphic.offsetHeight}px`,
                    ease: Power1.easeOut,
                })
                .to(this.bezierHamm, 1, {
                    y: 0,
                    ease: Power1.easeIn,
                });

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.contentContainer, 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
                .add(tlLinearHamm)
                .add(tlBezierHamm, '-=2');
            },
        }
    }
</script>
<style lang="scss" scoped>
    .interpolationContainer {
        background-image: url('../../../img/andyroomsky.jpg');

        .title {
            h2 {
                opacity: 0;
            }
        }

        .contentContainer {
            height: 62vh;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 1440px;

            div {
                height: 100%;
                background-color: white;
                margin: 10px;
                width: 45%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                border-radius: 3px;

                h3 {
                    font-size: 1.2rem;
                    color: black;
                    margin-top: 5px;
                    font-family: 'Indie Flower', cursive;
                }

                .hamm {
                    height: 27%;
                    margin-top: 5px;
                }

                .graphic {
                    height: 150px;
                    width: 100%;
                    margin-bottom: 10px;
                }
            }

            .topContainer {
                justify-content: flex-start;
            }
        }
    }
</style>
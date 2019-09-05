<template>
    <div class="timeLineMax slideContainer">
        <div class="title">
            <h2>TIMELINEMAX</h2>
        </div>
        <div class="contentContainer">
            <div v-show="isShowingAnimation" class="animationContainer">
                <img class="rcCar" src="../../../img/rccar.png" alt="rccar" />
                <div class="stepsContainer">
                    <span class="step step1">1</span>
                    <span class="step step2">2</span>
                    <span class="step step3">3</span>
                    <span class="step step4">4</span>
                </div>
            </div>
            <div v-show="!isShowingAnimation" class="codeContainer">
                <div class="codeExample">
                    <div class="leftCode">
                        <h2>Using TweenMax</h2>
                        <code><pre>
TweenMax.to(element, 1, { property: value});
TweenMax.to(element, 1, { property2: value, delay:1});
TweenMax.to(element, 1, { property3: value, delay:2});
                        </pre></code>
                    </div>
                    <div class="separator">
                        <img src="../../../img/right_arrow_black.png" alt="arrow"/>
                    </div>
                    <div class="rightCode">
                        <h2>Using TimelineMax</h2>
                        <code><pre>
const tl = new TimelineMax({params});
tl.to(element, 1, {property: value});
tl.to(element, 1, {property2: value});
tl.to(element, 1, {property3: value});
                        </pre></code>
                    </div>
                </div>
                <div class="methodsExamples">
                    <div class="methods">
                        <h2>Useful Methods</h2>
                        <code>
                            <pre>
tl.play();
tl.pause();
tl.resume();
tl.reverse();
tl.time();
                            </pre>
                        </code>
                    </div>
                    <div class="separator"></div>
                    <div class="delay">
                        <h2>Delay</h2>
                        <p>tl.to(element, 1, {property: value}, <b>'+=2'</b>);</p>
                    </div>
                </div>
            </div>
            <div class="controlsContainer" :style="{marginTop: isShowingAnimation ? '20px' : 0}">
                <a v-show="isShowingAnimation" @click="restart()" class="cta">Restart</a>
                <a v-show="isShowingAnimation" @click="reverse()" class="cta">Reverse</a>
                <a @click="togglePanel()" class="cta">
                    {{isShowingAnimation ? 'Code' : 'Animation'}}
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'timeline-max-slide',
        mounted() {
            this.setElements();
            this.setCarInitialPos();
            this.displayAnimation();
        },
        data() {
            return {
                step: 1,
                isShowingAnimation: true,
            };
        },
        methods: {
            setElements() {
                this.title = this.$el.querySelector('.title h2');
                this.content = this.$el.querySelector('.contentContainer');
                this.image = this.$el.querySelector('.animationContainer img');
            },
            setCarInitialPos() {
                this.image.style.transform = `translateX(${this.getCarPos(1)}px)`;
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.content, 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1});

                this.carAnimation();
            },
            carAnimation() {
                this.carTl = new TimelineMax();

                this.carTl.to([this.image, this.getStepElement(this.step)], 1, {
                    opacity: 1,
                    onComplete: this.changeStep(2),
                })
                .to(this.image, 1, {
                    x: this.getCarPos(this.step),
                }, '+=1.5')
                .to(this.getStepElement(this.step), 1, {
                    opacity: 1,
                    onComplete: this.changeStep(3),
                }, '-=1')
                .to(this.image, 1, {
                    x: this.getCarPos(this.step),
                }, '+=1.5')
                .to(this.getStepElement(this.step), 1, {
                    opacity: 1,
                    onComplete: this.changeStep(4),
                }, '-=1')
                .to(this.image, 1, {
                    x: this.getCarPos(this.step),
                }, '+=1.5')
                .to(this.getStepElement(this.step), 1, {
                    opacity: 1,
                }, '-=1');;
            },
            getCarPos(step) {
                const stepElement = this.getStepElement(step);
                const posX = stepElement.offsetLeft + stepElement.clientWidth / 2 - this.image.clientWidth / 2;
                return posX;
            },
            getStepElement(step) {
                return this.$el.querySelector(`.step${step}`);
            },
            changeStep(step) {
                this.step = step;
            },
            restart() {
                this.carTl.restart();
            },
            reverse() {
                this.carTl.reverse();
            },
            togglePanel() {
                this.isShowingAnimation = !this.isShowingAnimation;
            },
        },
    }
</script>
<style lang="scss" scoped>
    .timeLineMax {
        background-image: url('../../../img/andyroomsky.jpg');

        .contentContainer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            height: 62vh;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 1440px;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
                color: black;
                font-size: 2rem;
                width: auto;
            }

            .animationContainer {
                width: 100%;
                padding: 20px;

                .rcCar {
                    width: 200px;
                    opacity: 0;
                }

                .stepsContainer {
                    width: 100%;
                    display: flex;
                }

                .step {
                    opacity: 0;
                    display:block;
                    width: 25%;
                    text-align: center;
                    font-family: 'Raleway', sans-serif;
                    color: black;
                    font-size: 1.5rem;
                }
            }

            .controlsContainer {
                height: 20%;
                display: flex;

                .cta {
                    margin: 10px;
                    border-radius: 30px;
                    background-color: #6198d8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 50px;
                    font-family: 'Raleway', sans-serif;
                    font-size: 1.1rem;
                    padding: 5px;
                    width: 100px;
                    cursor: pointer;

                    &:hover {
                        transition: transform .5s;
                        transform: scale(1.1);
                    }
                }
            }

            .codeContainer {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: black;
                width: 100%;
                padding: 20px;

                .codeExample {
                    display: flex;
                    width: 100%;
                    margin: 10px 0;

                    div {
                        width: 50%;
                        text-align: center;
                    }

                    .separator {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 15%;

                        img {
                            width: 70px;
                        }
                    }
                }

                p {
                    font-family: 'Raleway', sans-serif;
                    font-size: 1.1rem;
                }

                .methodsExamples {
                    display: flex;
                    width: 50%;
                    border: 1px solid;
                    border-radius: 4px;

                    div {
                        width: 50%;
                        text-align: center;
                    }

                    .separator {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 15%;
                    }
                }
            }
        }

    }
</style>
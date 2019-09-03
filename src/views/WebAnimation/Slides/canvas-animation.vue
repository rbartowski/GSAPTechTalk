<template>
    <div class="canvasAnimation slideContainer">
        <div class="title">
            <h2>REQUEST ANIMATION FRAME</h2>
        </div>
        <div class="contentContainer">
            <div class="leftPanel">
                <div class="animationControls">
                    <img class="playIcon" @click="playAnimation()" v-if="!isPlayingAnimation" src="../../../img/playicon.png" alt="playIcon" />
                    <img class="pauseIcon" @click="pauseAnimation()" v-if="isPlayingAnimation" src="../../../img/pauseicon.png" alt="pauseIcon" />
                </div>
                <div class="code">
                    <span class="currentTranslate">{{animationLabel}}</span>
                    <code class="syntax">
                        <pre>
let animationReference;

animation();

function animation() {
    posX = calculateNewPosition()
    element.style.transform = `translateX(${posX}px)`;
    animationReference = requestAnimationFrame(animation);
}

function cancelAnimation() {
    cancelAnimationFrame(animationReference);
}
                        </pre>
                    </code>
                </div>
            </div>
            <div class="animationContainer">
                <img src="../../../img/betty.png" alt="betty" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'canvas-animation',
        data() {
            return {
                isPlayingAnimation: false,
                speed: 10,
                posX: 0,
                animationLabel: '',
                goingRight: true,
            }
        },
        mounted() {
            this.setElements();
            this.displayAnimation();
        },
        methods: {
            setElements() {
                this.title = this.$el.querySelector('.title h2');
                this.content = this.$el.querySelector('.contentContainer');
                this.animationContainer = this.$el.querySelector('.animationContainer');
                this.betty = this.$el.querySelector('.animationContainer img');
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, { opacity: 1 })
                .to(this.title, 0.5, { opacity: 1 })
                .fromTo(this.content, 0.5, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 });
            },
            playAnimation() {
                this.isPlayingAnimation = true;
                this.animationFunction();
            },
            pauseAnimation() {
                this.isPlayingAnimation = false;
                cancelAnimationFrame(this.animation);
            },
            animationFunction() {
                this.positionMath();
                this.betty.style.transform = `translateX(${this.posX}px)`;
                this.animationLabel = `translateX(${this.posX}px)`;
                this.animation = requestAnimationFrame(this.animationFunction);
            },
            positionMath() {
                const newPos = this.posX + this.speed;

                if (this.goingRight) {
                    const newPos = this.posX + this.speed;
                    if (newPos < this.animationContainer.clientWidth - this.betty.clientWidth) {
                        this.posX = newPos;
                    }
                    else {
                        this.goingRight = false;
                    }
                }
                else {
                    const newPos = this.posX - this.speed;
                    if (newPos > 0) {
                        this.posX = newPos;
                    }
                    else {
                        this.goingRight = true;
                    }
                }
            }
        },
    };
</script>
<style lang="scss" scoped>
    .canvasAnimation {
        background-image: url('../../../img/andyroomsky.jpg');

        .title {
            h2 {
                opacity: 0;
                width: 100%;
            }
        }

        .contentContainer {
            border-radius: 3px;
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

            .leftPanel {
                height: 100%;
                width: 30%;
                .animationControls {
                    padding: 20px;
                    height: 15%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    img {
                        cursor: pointer;
                        height: 100%;
                    }
                }

                .code {
                    height: 70%;
                    padding: 15px;
                    color: black;
                    font-family: 'Raleway', sans-serif;

                    span {
                        display: block;
                        width: 100%;
                        font-size: 1.3rem;
                    }

                    .code {
                        font-size: 2rem;
                    }

                    .currentTranslate {
                        margin-top: 30px;
                        margin-bottom: 50px;
                        text-align: center;
                        font-weight: bold;
                    }
                }
            }

            .animationContainer {
                height: 80%;
                width: 70%;

                img {
                    height: 100%;
                }
            }
        }

    }
</style>
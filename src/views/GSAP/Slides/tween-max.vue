<template>
    <div class="tweenMax slideContainer">
        <div class="title">
            <h2>TWEENMAX</h2>
        </div>
        <div class="contentContainer">
            <div class="topContainer">
                <div class="buttonContainer">
                    <a @click="tweenTo()" class="cta">.to()</a>
                    <a @click="tweenFrom()" class="cta">.from()</a>
                    <a @click="staggerTo()" class="cta">.staggerTo()</a>
                    <a @click="staggerFrom()" class="cta">.staggerFrom()</a>
                    <a @click="tweenToCallback()" class="cta">callback</a>
                </div>
                <div class="animationContainer">
                    <div class="images">
                        <img class="jessie" src="../../../img/jessie.png" alt="jessie" />
                        <img class="jessie" src="../../../img/jessie.png" alt="jessie" />
                        <img class="jessie" src="../../../img/jessie.png" alt="jessie" />
                    </div>
                    <p>{{currentTween}}</p>
                    <p v-show="callbackCount > 0">callbacks: {{callbackCount}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tween-max-slide',
        data() {
            return {
                currentTween: '',
                posX: 0,
                wentRight: false,
                callbackCount: 0,
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
                this.imagesContainer = this.$el.querySelector('.images');
                this.images = this.$el.querySelectorAll('.animationContainer img');
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.content, 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1});
            },
            tweenTo(callback) {
                this.setX();
                TweenMax.to(this.images, 1, {x: this.posX, onComplete: callback});
                if (!callback) {
                    this.currentTween = 'TweenMax.to(element, duration, {x: value})';
                }
            },
            tweenFrom() {
                TweenMax.from(this.images, 1, {y: this.getY()});
                this.currentTween = 'TweenMax.from(element, duration, {y: value})';
            },
            staggerTo() {
                this.setY();
                TweenMax.staggerTo(this.images, 1, {y: this.posY}, 0.5);
                this.currentTween = 'TweenMax.staggerTo([elements], duration, {y: value})';
            },
            staggerFrom() {
                TweenMax.staggerFrom(this.images, 1, {y: this.getY()}, 0.5);
                this.currentTween = 'TweenMax.staggerFrom([elements], duration, {y: value})';
            },
            tweenToCallback() {
                this.tweenTo(this.increaseCount);
            },
            getY() {
                return this.imagesContainer.clientHeight - this.images[0].clientHeight;
            },
            increaseCount() {
                this.callbackCount++;
            },
            setX() {
                if (this.wentRight) {
                    this.wentRight = false;
                    this.posX = 0;
                }
                else {
                    this.wentRight = true;
                    this.posX = 200;
                }
            },
            setY() {
                if (this.wentDown) {
                    this.wentDown = false;
                    this.posY = 0;
                }
                else {
                    this.wentDown = true;
                    this.posY = this.getY();
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tweenMax {
        background-image: url('../../../img/andyroomsky.jpg');

        p {
            font-family: 'Raleway', sans-serif;
            font-size: 1.5rem;
            color: black;
            margin: 0;
        }

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

            .topContainer {
                display: flex;
                width: 90%;

                .buttonContainer {
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .animationContainer {
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .images {
                        height: 75%;
                    }
                }

                .codeContainer {
                    width: 30%;
                    text-align: right;

                    p {
                        font-size: 1.1rem;
                    }
                }

                img {
                    width: 100px;
                    margin-left: 100px;

                    &:first-of-type {
                        margin-left: 0;
                    }
                }
            }
        }

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
            width: 125px;
            cursor: pointer;

            &:hover {
                transition: transform .5s;
                transform: scale(1.1);
            }
        }

    }
</style>
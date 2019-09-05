<template>
    <div class="tweenMax slideContainer">
        <div class="title">
            <h2>EASING</h2>
        </div>
        <div class="contentContainer">
            <div class="topContainer">
                <div class="buttonContainer">
                    <a @click="power4()" class="cta">Power4.easeIn</a>
                    <a @click="power4EaseOut()" class="cta">Power4.easeOut</a>
                    <a @click="bounce()" class="cta">Bounce.easeOut</a>
                    <a @click="sine()" class="cta">Sine.easeOut</a>
                    <a @click="stepped()" class="cta">SteppedEase.config(5)</a>
                </div>
                <div class="animationContainer">
                    <div class="images">
                        <img class="slinky" src="../../../img/slinky.png" alt="slinky" />
                    </div>
                    <p>{{currentTween}}</p>
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
                this.image = this.$el.querySelector('.animationContainer img');
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.content, 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1});
            },
            power4() {
                this.setX();
                TweenMax.to(this.image, 1, {x: this.posX, ease: Power4.easeIn});
                this.currentTween = 'TweenMax.to(element, duration, {x: value, ease: Power4.easeIn})';
            },
            power4EaseOut() {
                this.setX();
                TweenMax.to(this.image, 1, {x: this.posX, ease: Power4.easeOut});
                this.currentTween = 'TweenMax.to(element, duration, {x: value, ease: Power4.easeOut})';
            },
            bounce() {
                this.setX();
                TweenMax.to(this.image, 1, {x: this.posX, ease: Bounce.easeOut});
                this.currentTween = 'TweenMax.to(element, duration, {x: value, ease: Bounce.easeOut})';
            },
            sine() {
                this.setX();
                TweenMax.to(this.image, 1, {x: this.posX, ease: Sine.easeOut});
                this.currentTween = 'TweenMax.to(element, duration, {x: value, ease: Sine.easeOut})';
            },
            stepped() {
                this.setX();
                TweenMax.to(this.image, 1, {x: this.posX, ease: SteppedEase.config(5)});
                this.currentTween = 'TweenMax.to(element, duration, {x: value, ease: SteppedEase.config(5)})';
            },
            setX() {
                if (this.wentRight) {
                    this.wentRight = false;
                    this.posX = 0;
                }
                else {
                    this.wentRight = true;
                    this.posX = this.imagesContainer.clientWidth - this.image.clientWidth;
                }
            },
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
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .images {
                        height: 75%;
                        width: 100%;
                        display:flex;
                        align-items: center;
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
                    width: 200px;
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
            width: 200px;
            cursor: pointer;

            &:hover {
                transition: transform .5s;
                transform: scale(1.1);
            }
        }

    }
</style>
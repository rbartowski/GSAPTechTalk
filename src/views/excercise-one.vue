<template>
    <div class="excercise-one">
        <img class="logo" src="../img/logo.png" alt="logo" v-on:click="playBallAnimation()"/>
        <img class="ball" src="../img/ball.png" alt="ball" />
        <img class="floor" src="../img/floor.png" alt="floor" />
        <img class="buzzFly" src="../img/buzzfly.gif" alt="buzzFly" @mouseenter="playBuzzFlyAnimation()"/>
        <img class="rex" src="../img/rex.gif" alt="rex" @click="playRexHideAnimation()" />
        <img class="missPotato" src="../img/misspotato.png" @:click="playRexShowAnimation()" />
    </div>
</template>
<style lang="scss">
.excercise-one {
        width: 100%;
        height: 100%;
        background-image: url('../img/andyroom.jpg');
        background-size: 100vw 100vh;
        background-position: center;

        .logo {
            cursor: pointer;
            width: 25%;
            position: absolute;
            top: 10vh;
            left: 0;
            right: 0;
            margin: auto;
        }

        .ball {
            width: 10vh;
            height: 10vh;
            position: absolute;
            top: 0;
            left: 45%;
            z-index: 10;
            opacity: 0;
        }

        .floor {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 26.8vh;
            width: 100%;
            z-index: 5;
        }

        .buzzFly {
            width: 20vh;
            position: absolute;
            bottom: calc(26.8vh - 10px);
            left: 10%;
            z-index: 10;
        }

        .rex {
            width: 20vh;
            position: absolute;
            bottom: calc(26.8vh - 20px);
            right: 10%;
            z-index: 20;
        }

        .missPotato {
            width: 20vh;
            position: absolute;
            bottom: calc(26.8vh - 10px);
            right: 10%;
            z-index: 15;
            opacity: 0;
        }
    }
</style>
<script>
import andyRoom from '../img/andyroom.jpg';
import ball from '../img/ball.png';
import buzzFly from '../img/buzzfly.gif';
import { TimelineMax, TweenMax, Bounce, Power2 } from 'gsap';

export default {
    name: 'excercise-one',
    mounted() {
            this.ball = this.$el.querySelector('.ball');
            this.floor = this.$el.querySelector('.floor');
            this.buzzFlyGif = this.$el.querySelector('.buzzFly');
            this.rexGif = this.$el.querySelector('.rex');
            this.missPotato = this.$el.querySelector('.missPotato');
        },
    methods: {
        playBallAnimation() {
            if (!this.isPlayingAnimation) {
                const floorY = document.documentElement.clientHeight - this.floor.clientHeight;
                this.isPlayingAnimation = true;
                const tl = new TimelineMax();

                tl.to(this.ball, 0.25, {
                    opacity: 1,
                })
                .fromTo(this.ball, 2, {
                    y: 0,
                    rotation: 0,
                }, {
                    y: floorY,
                    rotation: 45,
                    transformOrigin:'left 50%',
                    ease: Bounce.easeOut,
                })
                .to(this.ball, 1, {
                    opacity: 0,
                    onComplete: this.onBallAnimationFinished,
                });
            }
        },

        playBuzzFlyAnimation() {
            if (!this.isPlayingBuzzFly) {
                this.isPlayingBuzzFly = true;
                const hiddenPosY = document.documentElement.clientHeight - this.floor.clientHeight + this.buzzFlyGif.clientHeight;
                const bottomHiddenPosY = document.documentElement.clientHeight + this.buzzFlyGif.clientHeight;
                const tl = new TimelineMax();

                tl.fromTo(this.buzzFlyGif, 1, {
                    y: 0,
                }, {
                    y: -hiddenPosY,
                    ease: Power2.easeIn,
                })
                .fromTo(this.buzzFlyGif, 1, {
                    y: bottomHiddenPosY,
                }, {
                    y: 0,
                    ease: Power2.easeOut,
                    onComplete: this.onBuzzFlyComplete,
                })
            }
        },

        playRexHideAnimation() {
            if (!this.isPlayingRexAnimation) {
                this.isPlayingRexAnimation = true;
                const finalXPosition = document.documentElement.clientWidth + this.rexGif.clientWidth * 4 - document.documentElement.clientWidth * 0.10;
                const tl = new TimelineMax();

                tl.to(this.rexGif, 4, {
                    x: -finalXPosition,
                    scale: 4,
                    ease: Power2.easeIn,
                })
                .to(this.missPotato, 1, {
                    opacity: 1,
                })
                .from(this.missPotato, 2, {
                    scale: 0.25,
                }, '-=1');
            }
        },

        playRexShowAnimation() {
            if (!this.isPlayingRexShowAnimation) {
                this.isPlayingRexShowAnimation = true;

                const tl = new TimelineMax();

                tl.to(this.missPotato, 2, {
                    x: document.documentElement.clientWidth,
                    ease: Power2.easeIn,
                }).fromTo(this.rexGif, 2, {
                    x: document.documentElement.clientWidth,
                }, {
                    x: 0,
                    onComplete: this.onRexShowFinished,
                });
            }
        },

        onBallAnimationFinished() {
            this.isPlayingAnimation = false;
        },

        onBuzzFlyComplete() {
            this.isPlayingBuzzFly = false;
        },

        onRexHideComplete() {
            this.isPlayingRexAnimation = false;

        },

        onRexShowFinished() {
            this.isPlayingRexShowAnimation = false;
        }
    }
}
</script>
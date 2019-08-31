<template>
    <div class="intro">
        <img class="pizzaPlanetLogo" @click="startIntroFadeOut()" src="../img/pizzaplanet.png" />
    </div>
</template>

<script>
    import starsBackground from '../img/stars.jpg';
    import pizzaPlanet from '../img/pizzaplanet.png';
    import { TweenMax, TimelineMax } from 'gsap';
    import store from '../store/store.js';

    export default {
        name: "intro",
        mounted() {
            this.logo = this.$el.querySelector('.pizzaPlanetLogo');

            this.scaleLogo();
        },
        computed: {
            currentPage() {
                return store.state.currentPage;
            }
        },
        methods: {
            scaleLogo() {
                TweenMax.fromTo(this.logo, 1, {
                    scale: 0.5,
                }, {
                    scale: 1.1,
                    onComplete: this.setIdleAnimation,
                });
            },

            setIdleAnimation() {
                this.logo.classList.add('idle');
            },

            startIntroFadeOut() {
                const tl = new TimelineMax();

                this.logo.classList.remove('idle');

                tl.to(this.logo, 2, {
                    scale: 0,
                }).to(this.$el, 2, {
                    opacity: 0,
                    onComplete: this.changePage,
                });
            },

            changePage() {
                store.commit('setCurrentPage', this.currentPage + 1);
            },
        },
        data: () => ({
        }),
    }
</script>

<style lang="scss" scoped>
    .intro {
        width: 100%;
        height: 100%;
        position: fixed;
        background-image: url('../img/stars.jpg');
        background-size: repeat;
        background-position: center;

        .pizzaPlanetLogo {
            width: 30vw;
            height: auto;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            cursor: pointer;

            &.idle {
                animation: logoAnimation;
                animation-duration: 2s;
                animation-iteration-count: infinite;

            }
        }

        @keyframes logoAnimation {
            0% {
                transform: scale(1.1);
            }
            50% {
                transform: scale(1);
            }
            100% {
                transform: scale(1.1);
            }
        }
    }
</style>
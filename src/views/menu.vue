<template>
    <div class="menu">
            <div class="title">
                <h2>GSAP ANIMATIONS</h2>
                <div class="legend">
                    <span>WORKSHOP!</span>
                </div>
            </div>
                <div class="slidesContent">
                    <div class="sectionColumn">
                        <h3>Animation 101</h3>
                        <div class="sectionContent">
                            <ul>
                                <li><span>Brief Animation Story</span></li>
                                <li><span>Core concepts</span></li>
                                <li><span>Interpolation</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sectionColumn">
                        <h3>Web Animation</h3>
                        <div class="sectionContent">
                            <ul>
                                <li><span>CSS</span></li>
                                <li><span>Canvas</span></li>
                                <li><span>Libs</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sectionColumn">
                        <h3>GSAP!</h3>
                        <div class="sectionContent">
                            <ul>
                                <li><span>Why GSAP?</span></li>
                                <li><span>TweenMax</span></li>
                                <li><span>TimelineMax</span></li>
                                <li><span>Easing</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
    import { TweenMax, TimelineMax, Power4, Bounce } from 'gsap';
    import store from '../store/store.js';

    export default {
        name: "main-menu",
        mounted() {
            this.setElements();
            this.calculateLegendPosition();
            this.menuAnimation();
        },
        computed: {
            currentPage() {
                return store.state.currentPage;
            }
        },
        methods: {
            setElements() {
                this.titleH2 = this.$el.querySelector('.title h2');
                this.titleLegend = this.$el.querySelector('.title .legend');
                this.sectionColumns = this.$el.querySelectorAll('.sectionColumn');
                console.log(this.sectionColumns);
            },
            calculateLegendPosition() {
                this.titleLegend.style.top = `${this.titleH2.clientHeight / 2 - this.titleLegend.clientHeight}px`;
                this.titleLegend.style.left = `calc(50%  + ${this.titleH2.clientWidth / 2}px - ${this.titleLegend.clientWidth}px)`;
            },
            menuAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .fromTo(this.titleH2, 0.5, {
                    opacity: 0,
                    scale: 0,
                }, {
                    opacity: 1,
                    scale: 1,
                })
                .fromTo(this.titleLegend, 0.5, {
                    opcaity: 0,
                    scale: 0,
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Bounce.easeOut,
                })
                .staggerTo(this.sectionColumns, 1, {
                    opacity: 1,
                    scale: 1,
                    ease: Power4.easeOut,
                }, 0.5);
            },
        },
        data: () => ({
        }),
    }
</script>

<style lang="scss" scoped>
    .menu {
        width: 100%;
        height: 100%;
        position: fixed;
        background-image: url('../img/andyroomsky.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;

        .title {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;


            .legend {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 30px;
                background-color: #e20025;
                font-family: 'Raleway', sans-serif;
                color: white;
                font-weight: bold;
                transform: rotate(-20deg);
                position: absolute;
            }

            h2 {
                width: 50vw;
                text-align: center;
                font-size: 5em;
                color: white;
                margin: 0;
                font-family: 'Indie Flower', cursive;
            }
        }

        .slidesContent {
            width: 100%;
            height: 55vh;
            display: flex;
            max-width: 1440px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;

            .sectionColumn {
                margin: 0 10px;
                flex-grow: 1;
                width: 33vw;
                background-color: #fff;
                border-radius: 3px;
                opacity: 0;
                transform: scale(0);

                &:hover {
                    box-shadow: 0 0 5px 1px black;
                    transform: matrix(1.02, 0, 0, 1.02, 0, 0) !important;
                    transition: transform 0.5s;
                }

                h3 {
                    font-family: 'Indie Flower', cursive;
                    text-align: center;
                    font-size: 2rem;
                }

                ul {
                    list-style-type: none;

                    li {
                        font-family: 'Indie Flower', cursive;
                        padding: 15px;

                        &:hover {
                            transform: scale(1.05);
                            transition: transform 0.5s;

                            span {
                                font-weight: bold;
                            }
                        }

                        span {
                            cursor: pointer;
                            font-size: 1.5rem;
                        }
                    }
                }
            }
        }
    }
</style>
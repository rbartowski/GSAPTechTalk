<template>
    <div class="menu slideContainer">
            <div class="title">
                <h2>GSAP ANIMATIONS</h2>
                <div @click="changePage(pageIndex.EXCERCISE)" class="legend">
                    <span>WORKSHOP!</span>
                </div>
            </div>
                <div class="slidesContent">
                    <div class="sectionColumn">
                        <h3>Animation 101</h3>
                        <div class="sectionContent">
                            <ul>
                                <li><span @click="changePage(pageIndex.STORY)">A Brief History of Animation</span></li>
                                <li><span @click="changePage(pageIndex.CONCEPTS)">Core concepts</span></li>
                                <li><span @click="changePage(pageIndex.INTERPOLATION)">Interpolation</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sectionColumn">
                        <h3>Web Animation</h3>
                        <div class="sectionContent">
                            <ul>
                                <li><span @click="changePage(pageIndex.CSS)">CSS</span></li>
                                <li><span @click="changePage(pageIndex.CSS_KEYFRAMES)">CSS Keyframes</span></li>
                                <li><span @click="changePage(pageIndex.CANVAS)">Request Animation Frame</span></li>
                                <li><span @click="changePage(pageIndex.LIBS)">Libs</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sectionColumn">
                        <h3>GSAP!</h3>
                        <div class="sectionContent">
                            <ul>
                                <li><span @click="changePage(pageIndex.WHY_GSAP)">Why GSAP?</span></li>
                                <li><span @click="changePage(pageIndex.TWEENMAX)">TweenMax</span></li>
                                <li><span @click="changePage(pageIndex.TIMELINEMAX)">TimelineMax</span></li>
                                <li><span @click="changePage(pageIndex.EASING)">Easing</span></li>
                                <li><span @click="changePage(pageIndex.CHEAT_SHEET)">Cheat Sheet</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
    import { TweenMax, TimelineMax, Power4, Bounce } from 'gsap';
    import store from '../store/store.js';
    import PAGES from '../store/pageIndex.js';

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
            },
            pageIndex() {
                return PAGES;
            },
        },
        methods: {
            setElements() {
                this.titleH2 = this.$el.querySelector('.title h2');
                this.titleLegend = this.$el.querySelector('.title .legend');
                this.sectionColumns = this.$el.querySelectorAll('.sectionColumn');
            },
            changePage(page) {
                store.commit('setCurrentPage', page);
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
        background-image: url('../img/andyroomsky.jpg');

        .title {
            .legend {
                cursor: pointer;
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
        }

        .slidesContent {
            width: 100%;
            height: 61vh;
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
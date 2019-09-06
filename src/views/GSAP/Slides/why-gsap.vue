<template>
    <div class="whyGsap slideContainer">
        <div class="title">
            <h2>WHY GSAP?</h2>
        </div>
        <div class="contentContainer">
            <div class="contentColumn">
                <h2>Benefits Over Css</h2>
                <ul>
                    <li>CALLBACKS!</li>
                    <li>Timeline</li>
                </ul>
                <h2>Benefits Over Other Libs</h2>
                <ul>
                    <li>MIT License</li>
                    <li>Cross-browser</li>
                    <li>Speed</li>
                    <li>Size</li>
                    <li>Learning Curve</li>
                </ul>
            </div>
            <div class="contentColumn">
                <h2>Setup</h2>
                <p>npm install gsap</p>
                <p>import {TweenMax} from "gsap/TweenMax"</p>
                <a target="blank" href="https://helixint.dolby.com/">Prod Example</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'why-gsap',
        mounted() {
            this.setElements();
            this.displayAnimation();
        },
        methods: {
            setElements() {
                this.title = this.$el.querySelector('.title h2');
                this.content = this.$el.querySelector('.contentContainer');
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.content, 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1});
            },
        },
    };
</script>
<style lang="scss" scoped>
    .whyGsap {
        background-image: url('../../../img/andyroomsky.jpg');

        .contentContainer {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            height: 50vh;
            display: flex;
            justify-content: center;
            background-color: white;
            max-width: 1440px;
            border-radius: 3px;

            .contentColumn {
                width: 33%;
                padding: 15px;

                ul {
                    list-style-type: none;

                    li {
                        color: black;
                        font-size: 1.2rem;
                        font-family: 'Indie Flower', cursive;
                    }
                }

                a {
                    cursor: pointer;
                    color: black;
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: bold;
                    font-family: 'Indie Flower', cursive;
                    height: 50px;
                    width: 138px;
                }

            }

            h2 {
                font-size: 1.5rem;
                color: black;
                width: 100%;
                text-align: left;
            }

            p {
                font-size: 1.2rem;
                color: black;
                font-family: 'Indie Flower', cursive;
            }

            a {
                width: 25%;
                height: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 65%;
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        }
    }
</style>
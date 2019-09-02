<template>
    <div class="cssAnimation slideContainer">
        <div class="title">
            <h2>CSS ANIMATION</h2>
        </div>
        <div class="contentContainer">
            <div class="animationContainer">
                <img src="../../../img/buzzwoody.png" alt="buzzwoody" />
                <div class="legend">
                    <span class="transformApplied">{{transformApplied}}</span>
                    <span class="transitionApplied">{{transitionApplied}}</span>
                </div>
            </div>
            <div class="selectorContainer">
                <div class="transformSelector">
                    <h3>Transform:</h3>
                    <ul>
                        <li>translate(<span :class="{active: currentTransform === 'translateX'}" @click="applyTransform('translate(100px, 0)', 'translateX')">X</span>, <span :class="{active: currentTransform === 'translateY'}" @click="applyTransform('translate(0, 100px)', 'translateY')">Y</span>)</li>
                        <li :class="{active: currentTransform === 'scale'}" @click="applyTransform('scale(0.75)', 'scale')">scale(value)</li>
                        <li :class="{active: currentTransform === 'rotate'}" @click="applyTransform('rotate(45deg)', 'rotate')">rotate(deg)</li>
                    </ul>
                </div>
                <div class="transitionSelector">
                    <h3>Transition:</h3>
                    <ul>
                        <li @click="applyTransition('none', 0)" :class="{active: currentTransition === 0}">none</li>
                        <li @click="applyTransition('transform 1s', 1)" :class="{active: currentTransition === 1}">1s</li>
                        <li @click="applyTransition('transform 2s', 2)" :class="{active: currentTransition === 2}">2s</li>
                        <li @click="applyTransition('transform 5s', 5)" :class="{active: currentTransition === 5}">5s</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'css-animation',
        mounted() {
            this.setElements();
            this.displayAnimation();
        },
        data() {
            return {
                transitionApplied: 'transition: none;',
                transformApplied: 'transform: none;',
                currentTransform: '',
                currentTransition: 0,
            };
        },
        methods: {
            setElements() {
                this.title = this.$el.querySelector('.title h2');
                this.content = this.$el.querySelector('.contentContainer');
                this.image = this.$el.querySelector('.animationContainer img');
            },
            displayAnimation() {
                const tl = new TimelineMax();

                tl.to(this.$el, 0.5, {opacity: 1})
                .to(this.title, 0.5, {opacity: 1})
                .fromTo(this.content, 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1});
            },
            applyTransform(transform, active) {
                if (active === this.currentTransform) {
                    this.image.style.transform = 'none';
                    this.currentTransform = '';
                    this.transformApplied = 'transform: none';
                    return;
                }

                this.image.style.transform = transform;
                this.currentTransform = active;
                this.transformApplied = `transform: ${transform};`;
            },
            applyTransition(transition, active) {
                this.image.style.transition = transition;
                this.currentTransition = active;
                this.transitionApplied = `transition: ${transition};`;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .cssAnimation {
        background-image: url('../../../img/andyroomsky.jpg');

        .title {
            h2 {
                opacity: 0;
            }
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

            .animationContainer {
                width: 50vw;
                border-radius: 3px;
                background-color: white;
                margin-right: 10px;
                height: 100%;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                img {
                    height: 60%;
                }

                .legend {
                    display: flex;
                    flex-direction: column;

                    span {
                        font-size: 1.5rem;
                        margin: auto;
                        color: black;
                        font-family: 'Raleway', sans-serif;
                    }
                }
            }

            .selectorContainer {
                width: 20vw;
                background-color: white;
                border-radius: 3px;
                height: 100%;
                padding: 20px;
                color: black;

                .transitionSelector {
                    margin-top: 15px;
                }

                h3 {
                    font-size: 2.5rem;
                    margin: 0;
                    font-family: 'Indie Flower', cursive;
                }

                ul {
                    list-style-type: none;
                    margin: 0 10px;
                    width: 300px;

                    li {
                        font-family: 'Indie Flower', cursive;
                        cursor: pointer;
                        font-size: 2rem;
                        transition: transform 0.5s;

                        &.active {
                            color: #486fda;
                        }

                        span {
                            &.active {
                            color: #486fda;
                        }
                        }

                        &:hover {
                            transform: scale(1.05);
                            font-weight: bold;
                        }
                    }
                }
            }

        }
    }
</style>
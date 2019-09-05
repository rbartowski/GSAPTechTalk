<template>
    <div class="jsLibAnimation slideContainer">
        <div class="title">
            <h2>CHEAT SHEET</h2>
        </div>
        <div class="contentContainer">
            <div class="contentColumn">
                <h2>TweenMax</h2>
                <code>
                    <pre>
import TweenMax from 'gsap';

TweenMax.to(element, duration, {property: value});
TweenMax.from(element, duration, {property: value});
                    </pre>
                </code>
                <h2>Callback</h2>
                    <code>
                        <pre>
TweenMax.to(element, duration, {
    property: value,
    callbackName: function
});
                        </pre>
                    </code>
            </div>
            <div class="contentColumn">
                <h2>TimelineMax</h2>
                <p>
                    <code>
                        <pre>
const tl = new TimelineMax();

tl.to(element, duration, {
    property: value,
    onComplete: function
})
.to(element, duration, {
    property: value,
    onComplete: function
});
                        </pre>
                    </code>

                </p>
            </div>
            <div class="contentColumn">
                <h2>Easing</h2>
                <code>
                    <pre>
TweenMax.to(element, duration, {
    property: value,
    ease: Power4.easeOut / Power4.easeIn / Power4.easeInOut
});
                    </pre>
                </code>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cheat-sheet',
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
    .jsLibAnimation {
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

                pre {
                    color: black;
                }
            }

            h2 {
                font-size: 1.5rem;
                color: black;
                width: 100%;
            }

            p {
                font-size: 1.1rem;
                color: black;
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
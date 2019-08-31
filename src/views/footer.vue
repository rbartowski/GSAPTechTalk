<template>
    <div class="main-footer">
        <div class="leftArrowContainer">
            <img v-show="currentPage > 1" class="leftArrow" src="../img/right_arrow.png" />
        </div>
        <div class="logoContainer">
            <img class="valtechLogo" src="../img/valtech_logo_white.png" />
        </div>
        <div class="rightArrowContainer">
            <img  v-show="currentPage > 0" class="rightArrow" src="../img/right_arrow.png" />
        </div>
    </div>
</template>

<script>
    import valtechLogo from '../img/valtech_logo_white.png';
    import arrow from '../img/right_arrow.png';
    import store from '../store/store.js';

    export default {
        name: "main-footer",
        mounted() {
        },
        computed: {
            currentPage() {
                return store.state.currentPage;
            }
        },
        methods: {
            moveNextPage() {
                store.commit('setCurrentPage', this.currentPage + 1);
            },

            movePrevPage() {
                store.commit('setCurrentPage', this.currentPage - 1);
            }
        },
        data: () => ({
        }),
    }
</script>

<style lang="scss" scoped>
    .main-footer {
        position: fixed;
        bottom: 0;
        display: flex;
        height: 12vh;
        width: 100%;

        .leftArrowContainer {
            width: 15vw;
            text-align: center;

            img {
                transform: rotate(180deg);
                width: 50%;
                cursor: pointer;
                margin-top: 10px;
            }
        }

        .logoContainer {
            width: 75vw;
            text-align: center;

            img {
                height: 50%;
            }
        }

        .rightArrowContainer {
            width: 15vw;
            text-align: center;

            img {
                width: 50%;
                cursor: pointer;
                margin-top: 10px;
            }
        }
    }
</style>
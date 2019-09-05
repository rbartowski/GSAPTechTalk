<template>
    <div class="main-footer">
        <div class="leftArrowContainer">
            <img @click="movePrevPage()" v-show="currentPage > 1" class="leftArrow" src="../img/right_arrow.png" />
        </div>
        <div class="logoContainer">
            <img @click="goHome()" class="valtechLogo" src="../img/valtech_logo_white.png" />
        </div>
        <div class="rightArrowContainer">
            <img @click="moveNextPage()" v-show="currentPage > 0 && currentPage !== pageIndex.EXCERCISE" class="rightArrow" src="../img/right_arrow.png" />
        </div>
    </div>
</template>

<script>
    import valtechLogo from '../img/valtech_logo_white.png';
    import arrow from '../img/right_arrow.png';
    import store from '../store/store.js';
    import pageIndex from '../store/pageIndex.js';

    export default {
        name: "main-footer",
        mounted() {
        },
        computed: {
            currentPage() {
                return store.state.currentPage;
            },
            pageIndex() {
                return pageIndex;
            }
        },
        methods: {
            moveNextPage() {
                store.commit('setCurrentPage', this.currentPage + 1);
            },

            movePrevPage() {
                store.commit('setCurrentPage', this.currentPage - 1);
            },

            goHome() {
                store.commit('setCurrentPage', 1);
            },
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
        z-index: 10;

        .leftArrowContainer {
            width: 15vw;
            text-align: center;

            img {
                transform: rotate(180deg);
                width: 30%;
                cursor: pointer;
                margin-top: 10px;

                &:hover {
                    transform: rotate(180deg) scale(1.2);
                    transition: transform 0.5s;
                }
            }
        }

        .logoContainer {
            width: 75vw;
            text-align: center;

            img {
                height: 50%;
                cursor: pointer;
            }
        }

        .rightArrowContainer {
            width: 15vw;
            text-align: center;

            img {
                width: 30%;
                cursor: pointer;
                margin-top: 10px;

                &:hover {
                    transform: scale(1.2);
                    transition: transform 0.5s;
                }
            }
        }
    }
</style>
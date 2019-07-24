import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentPage: 0,
    },
    mutations: {
        nextPage(state) {
            state.currentPage++;
        },
        prevPage(state) {
            state.currentPage--;
        }
    }
});

export default store;
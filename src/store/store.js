import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      currentPage: 0,
    },
    mutations: {
      setCurrentPage (state, currentPage) {
        state.currentPage = currentPage;
      }
    }
});

export default store;
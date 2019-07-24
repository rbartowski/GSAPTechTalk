import Vue from 'vue';
import store from './store';

var vm = new Vue({
    el: '#app',
    computed: {
        currentPage() {
            return store.state.currentPage;
        }
    },
    methods: {
        prevPage() {
            store.commit('prevPage');
        },
        nextPage() {
            store.commit('nextPage');
        }
    }
});
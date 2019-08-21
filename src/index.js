import Vue from 'vue';
import Vuex from 'vuex';
import MainContent from './views/main-content';

import './styles/main.scss';

let MainComponent = Vue.extend(MainContent);

new MainComponent().$mount("#mainContent");
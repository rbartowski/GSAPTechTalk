import Vue from 'vue';
import MainContent from './views/main-content';

import './styles/main.scss';

let MainComponent = Vue.extend(MainContent);

new MainComponent().$mount("#mainContent");
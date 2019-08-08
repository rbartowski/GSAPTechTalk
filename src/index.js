import Vue from 'vue';
import MainContent from './views/main-content';
import andyRoom from './img/andyroom.jpg';
import ball from './img/ball.png';
import buzzFly from './img/buzzfly.gif';
import './styles/main.scss';

let MainComponent = Vue.extend(MainContent);

new MainComponent().$mount("#mainContent");
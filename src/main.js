import Vue from './lib/vue.js';
import a from './components/a.js';

var router = [
  {path: '/a', active: true, commponent: a}
];

new Vue({
  el: '#app',
  router
})

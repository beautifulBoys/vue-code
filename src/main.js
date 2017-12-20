import Vue from './vue/index.js';
import template from './components/test.html';

new Vue({
  el: '#app',
  template: template,
  data: {
    talk: '精忠报国',
    name: '李鑫',
    list: [
      {
        id: 1, text: '第一个',
        id: 2, text: '第二个'
      }
    ]
  }
});

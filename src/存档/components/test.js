import html from './test.html';
export default {
  template: html,
  data: {
    list: '我是测试字符',
    name: '李鑫',
    obj: {
      a: 'haha',
      b: {}
    }
  },
  created () {
    this.test();
  },
  methods: {
    test () {
      console.log(this.list);
    }
  }
}

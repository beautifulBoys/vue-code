import html from './a.html';
export default {
  template: html,
  data: {
    list: 'aaaa'
  },
  methods: {
    test () {
      console.log(this.list)
    }
  }
}

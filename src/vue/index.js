import Observer from '../observer/index.js';

const Vue = function (options) {
  this.init(options);
};

Vue.prototype = {
  init: function (options) {
    // this._compile(document.getElementById('app'));
    options.data = new Observer().create(options.data);
    console.log(options.data);
    document.getElementById('app').innerHTML = options.template;
  }
};

export default Vue;

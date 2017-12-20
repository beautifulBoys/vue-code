const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
const arrayAugmentations = [];

aryMethods.forEach((method) => {
    let original = Array.prototype[method];
    arrayAugmentations[method] = function () {
        console.log('我被改变啦!');
        return original.apply(this, arguments);
    };
});















// 观察者构造函数
function Observer (value, type) {
  this.value = value;

  Object.defineProperty(this, 'data', {
    value: this,
    enumerable: false,
    writable: true,
    configurable: true
  });

  if (type === ARRAY) {
    value.__proto__ = arrayAugmentations;
    this.link(value);
  } else if (type === OBJECT) {
    value.__proto__ = objectAugmentations;
    this.walk(value);
  }
}

Observer.prototype.walk = function (obj) {
  let val;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      val = obj[key];

      // 这里进行判断，如果还没有遍历到最底层，继续new Observer
      if (typeof val === 'object') {
        new Observer(val);
      }
      this.convert(key, val);
    }
  }
}
Observer.prototype.convert = function (key, val) {


  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('你访问了' + key);
      return val
    },
    set: function (newVal) {
      console.log('你设置了' + key);
      console.log('新的' + key + ' = ' + newVal);
      if (newVal === val) return;
      val = newVal;
    }
  })
}
Observer.prototype.create = function (value) {
  if (Array.isArray(value)) { // 数组
    return new Observer(value, 0);
  } else {
    return new Observer(value, 1);
  }
}

export default Observer;

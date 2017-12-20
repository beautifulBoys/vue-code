

function Observer(data) {
  this.data = data;
  this.walk(data)
}

Observer.prototype.walk = function (data) {
  for (let k in data) {
    if (data.hasOwnProperty(k)) {
      if (typeof data[k] === 'object') new Observer(data[k]);
      this.convert(k, data[k]);
    }
  }
}
Observer.prototype.convert = function (key, value) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
        return value;
    },
    set: function (newValue) {
        if (newValue === value) return;
        value = newValue;
    }
  });
}

function dataBind (obj) {
  obj = new Observer(obj);
  return obj;
}

export default dataBind;

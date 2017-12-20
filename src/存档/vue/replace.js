
var escapeArray = ['/', '[', ']', '-', '.', '(', ')', '$', '^', '*', '+', '?', '|', '{', '}'];

function stringEscape (str) {

  let stringArray = str.toString().split('');

  for (let j = 0; j < stringArray.length; j++) {
    for (let i = 0; i < escapeArray.length; i++) {

      if (stringArray[j] === escapeArray[i]) {
        stringArray[j] = '\\' + escapeArray[i];
      }

    }
  }

  return stringArray.join('');
}


function replaceFunc (configArray, source) {
  for (let i = 0; i < configArray.length; i++) {
    let reg = new RegExp(stringEscape(configArray[i].search), configArray[i].attr);
    source = source.replace(reg, configArray[i].replace);
  }
  return source;
}

export default replaceFunc;

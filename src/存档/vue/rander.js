import replaceFunc from './replace.js';
import Directive from './directive';

const util = {
  _bindDirective: function (name, expression, node, commponent) {
    let dirs = [];
    dirs.push(new Directive(name, node, this, expression, commponent));
  }
}




export default (commponent) => {
  // let replaceStr2 = commponent.template.replace(/(.*)\{\{(.*)\}\}(.*)/g, '$2');

  let patt = /{{\w+}}/g;
  // let nodeValue = node.nodeValue;
  let expressions = commponent.template.match(patt);  // 这是一个数组,形如["{{name}}"];
  // let mapObj = {};
  // for (let i = 0; i < expressions.length; i++) {
  //   mapObj[expressions[i]] = expressions[i].replace(/[{}]/g, '').trim();
  // }

  // console.log(expressions, mapObj);



  expressions.forEach((expression) => {
    let el = document.createTextNode('');
    node.parentNode.insertBefore(el, node);
    let property = expression.replace(/[{}]/g, '');
    util._bindDirective('text', property, el, commponent);
  });
  el.parentNode.removeChild(node);

  // replaceStr2 = replaceStr2.trim();
  //
  // let arr = [{
  //   replace: commponent.data[replaceStr2],
  //   search: `{{list}}`,
  //   attr: 'g'
  // }];
  // commponent.template = replaceFunc(arr, commponent.template);
  // console.log(commponent.template);
  return commponent;
};

function Directive(name, el, vm, expression, commponent) {
    this.name = name;
    this.el = el;
    this.vm = vm;
    this.expression = expression;
    this.attr = 'nodeValue';
    this.commponent = commponent;
    this.update();
}

Directive.prototype.update = function () {
    this.el[this.attr] = this.commponent.data[this.expression];
    console.log(`更新了DOM-${this.expression}`);
};

export default Directive;

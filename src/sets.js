module.exports = class Custom {
  constructor() {
    this.itens = {};
  }
  has(Element) {
    return this.itens.hasOwnProperty(Element);
  }

  add(Element) {
    if (!this.has(Element)) {
      this.itens[Element] = Element;
      return true;
    }
  } 

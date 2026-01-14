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
remove(Element) {
    if (this.has(Element)) {
      delete this.itens[Element];
      return true;
    }
    return false;
  }
  clear () {
    this.itens = {};
  }

  values(){
    return Object.values(this.itens);
  }

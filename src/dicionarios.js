const { defaultToString, ValuePair } = require('./util.js');

module.exports = class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key, value) { 
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  } 

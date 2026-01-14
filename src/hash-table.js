const { defaultToString, ValuePair } = require('./util.js');

function loseloseHashCode(key) {
  if (typeof key === 'number') {
    return key;
  }

  const tableKey = defaultToString(key);
  let hash = 0;

  for (let i = 0; i < tableKey.length; i++) {
    hash += tableKey.charCodeAt(i);
  }

  return hash % 37;
}

module.exports = class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hashCode(key) {
    return loseloseHashCode(key);
  }

  put(key, value) {
    if (key == null || value == null) return false;

    // ----------> Nesse exemplo, usaremos o nome mateus, seu hashCode será 26. Portanto position = 26
    const position = this.hashCode(key);

    // ----------> Verificamos se já existe algo na posição 26, se não existir, criamos um array vazio.
    if (this.table[position] == null) {
      this.table[position] = [];
    }

    const bucket = this.table[position];
    
    // ----------> Percorremos todos os pares do bucket (array na posição 26).
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value; 
        return true;
      }
    }

    bucket.push(new ValuePair(key, value));
    return true;
  }

  get(key) {
    const position = this.hashCode(key);
    const bucket = this.table[position];

    if (bucket != null) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          return bucket[i].value;
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const bucket = this.table[position];

    if (bucket != null) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket.splice(i, 1);
          if (bucket.length === 0) {
            delete this.table[position];
          }
          return true;
        }
      }
    }
    return false;
  }
};

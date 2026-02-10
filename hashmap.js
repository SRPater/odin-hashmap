export default class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(capacity);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity);
    this.size = 0;

    oldBuckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach(([key, value]) => {
          this.set(key, value);
        });
      }
    });
  }

  set(key, value) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
    this.size++;

    if (this.size > this.loadFactor * this.capacity) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      return null;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      return false;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      return false;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity);
    this.size = 0;
  }

  keys() {
    const keys = [];

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          keys.push(entry[0]);
        });
      }
    });

    return keys;
  }

  values() {
    const values = [];

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          values.push(entry[1]);
        });
      }
    });

    return values;
  }

  entries() {
    const entries = [];

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((entry) => {
          entries.push(entry);
        });
      }
    });

    return entries;
  }
}

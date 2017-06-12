class Stack {

  constructor() {
    this._storage = [];
  }

  size() {
    return this._storage.length;
  }

  push(item) {
    this._storage.push(item);
    return this._storage.length;
  }

  pop() {
    return this._storage.pop();
  }
}

module.exports = Stack;

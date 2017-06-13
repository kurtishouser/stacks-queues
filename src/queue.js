const Stack = require('./Stack');

class Queue {

  constructor() {
    this._s1 = new Stack();
    this._s2 = new Stack();
  }

  size() {
    return this._s1.size();
  }

  enqueue(item) {
    while (this._s1.size() > 0) {
      this._s2.push(this._s1.pop());
    }

    this._s1.push(item);

    while (this._s2.size() > 0) {
      this._s1.push(this._s2.pop());
    }
  }

  dequeue() {
    return this._s1.pop();
  }
}

module.exports = Queue;

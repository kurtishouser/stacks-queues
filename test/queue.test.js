const expect = require('chai').expect;
const Queue = require('../src/queue');

describe('Queue', function() {

  describe('Queue.size', function() {

    it('should have a size operation', function () {
      const queue = new Queue();
      expect(queue.size).is.a('function');
    });

    it('should return 0 when given a new queue', function() {
      const queue = new Queue();
      expect(queue.size()).to.equal(0);
    });

    it('should not return 0 after we add an item', function() {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.size()).to.not.equal(0);
    });

  });

  describe('Queue.enqueue', function() {

    it('should have a enqueue operation', function () {
      const queue = new Queue();
      expect(queue.enqueue).is.a('function');
    });

    it('size should increase by 1 after enqueue', function() {
      const queue = new Queue();
      let currentSize = queue.size();
      queue.enqueue(1);
      expect(queue.size()).to.equal(currentSize + 1);
    })

  });

  describe('Queue.dequeue', function() {

    it('should have a dequeue operation', function () {
      const queue = new Queue();
      expect(queue.dequeue).is.a('function');
    });

    it('should return a value', function() {
      const queue = new Queue();
      queue.enqueue(1);
      let item = queue.dequeue();
      expect(item);
    });

    it('should return the value of the last item enqueueed onto the queue', function() {
      const queue = new Queue();
      queue.enqueue(1);
      let item = queue.dequeue();
      expect(item).to.equal(1);
    });


    it('size should decrease by 1 after dequeue', function() {
      const queue = new Queue();
      queue.enqueue(1);
      let currentSize = queue.size();
      queue.dequeue();
      expect(queue.size()).to.equal(currentSize - 1);
    })

  });

});

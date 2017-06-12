const expect = require('chai').expect;
const Stack = require('../src/Stack');

describe('Stack', function() {

  describe('Stack.size', function() {

    it('should have a size operation', function () {
      const stack = new Stack();
      expect(stack.size).is.a('function');
    });

    it('should return 0 when given a new stack', function() {
      const stack = new Stack();
      expect(stack.size()).to.equal(0);
    });

    it('should not return 0 after we add an item', function() {
      const stack = new Stack();
      stack.push(1);
      expect(stack.size()).to.not.equal(0);
    });

  });

  describe('Stack.push', function() {

    it('should have a push operation', function () {
      const stack = new Stack();
      expect(stack.push).is.a('function');
    });

    it('size should increase by 1 after push', function() {
      const stack = new Stack();
      let currentSize = stack.size();
      stack.push(1);
      expect(stack.size()).to.equal(currentSize + 1);
    })

  });

  describe('Stack.pop', function() {

    it('should have a pop operation', function () {
      const stack = new Stack();
      expect(stack.pop).is.a('function');
    });

    it('should return a value', function() {
      const stack = new Stack();
      stack.push(1);
      let item = stack.pop();
      expect(item);
    });

    it('should return the value of the last item pushed onto the stack', function() {
      const stack = new Stack();
      stack.push(1);
      let item = stack.pop();
      expect(item).to.equal(1);
    });


    it('size should decrease by 1 after pop', function() {
      const stack = new Stack();
      stack.push(1);
      let currentSize = stack.size();
      stack.pop();
      expect(stack.size()).to.equal(currentSize - 1);
    })

  });

});

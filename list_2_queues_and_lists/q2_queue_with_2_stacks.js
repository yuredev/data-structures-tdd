import Stack from '../structures/stack';

class QueueWith2Stacks {
  constructor(maxSize = 5) {
    this.stack = new Stack(maxSize);
    this.auxStack = new Stack(maxSize);
  }
  enqueue(element) {
    if (this.isFull()) {
      throw new Error('Queue Overflow');
    }
    this.stack.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow');
    }
    transferStack(this.stack, this.auxStack, 1);
    const removedElement = this.stack.pop();
    transferStack(this.auxStack, this.stack);
    return removedElement;
  }
  front() {
    if (this.isEmpty()) {
      throw new Error('Empty Queue');
    }
    transferStack(this.stack, this.auxStack, 1);
    const result = this.stack.top(); 
    transferStack(this.auxStack, this.stack);
    return result;
  }
  length() {
    return this.stack.size();
  }
  isFull() {
    return this.stack.isFull();
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  toString() {
    return this.stack.toString();
  }
  clear() {
    this.stack.clear();
  }
}

/** 
 * Transfers the elements from a origin stack to a 
 * destination stack until the origin stack have 1 element
 * @param {Stack} origin The Stack that will be reduced 
 * @param {Stack} destiny The Stack that will receive the elements of the origin Stack
 * @param {number} [reduceTo = 0] The origin Stack size after the transference. 
 * The default value is 0 
 */
function transferStack(origin, destiny, reduceTo = 0) {
  while (origin.size() > reduceTo) {
    destiny.push(origin.pop());
  }
}

export default QueueWith2Stacks;
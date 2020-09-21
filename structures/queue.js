export default class Queue {
  constructor(maxSize = 5) {
    this.maxSize = maxSize;
    this.elements = [];
    this.beginning = 0;
    this.end = 0;
  }
  enqueue(element) {
    if (this.isFull()) {
      throw new Error('Queue Overflow');
    }
    this.elements[this.end++] = element;
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow');
    }
    return this.elements[this.beginning++];
  }
  isFull() {
    return this.length() === this.maxSize;
  }
  isEmpty() {
    return this.length() === 0;
  }
  length() {
    if (this.beginning === this.end) {
      return 0;
    }
    return this.end - this.beginning;
  }
  front() {
    if (this.isEmpty()) {
      throw new Error('Empty Queue');
    }
    return this.elements[this.beginning];
  }
  clear() {
    this.beginning = this.end = 0;
  }
  toString() {
    let result = '[';
    for (let i = this.beginning; i < this.end; i++) {
      result += this.elements[i];
      result += i < this.end - 1 ? ',' : '';
    }
    result += ']';
    return result;
  }
}
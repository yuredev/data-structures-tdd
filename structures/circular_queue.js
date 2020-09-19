export default class CircularQueue {
  constructor(maxSize = 5) {
    this.maxSize = maxSize;
    this.elements = [];
    this.beginning = 1;
    this.end = 1;
  }
  enqueue(element) {
    if (this.isFull()) {
      throw new Error('Queue Overflow');
    }
    this.elements[this.end++] = element;
    if (this.end === this.maxSize + 1) {
      this.end = 0;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow');
    } 
    const removedElement = this.elements[this.beginning];
    if (this.beginning === this.maxSize + 1) {
      this.beginning = 0;
    } else {
      this.beginning++;
    }
    return removedElement;
  }
  isFull() {
    return this.end + 1 === this.beginning;
  }
  isEmpty() {
    return this.end === this.beginning;
  }
  length() {
    if (this.end < this.beginning) {
      return this.maxSize - this.beginning + this.end + 1;
    }
    return this.end - this.beginning;
  }
  front() {
    return this.elements[this.beginning];
  }
  clear() {
    this.beginning = this.end = 1;
  }
  toString() {
    let result = '[';
    if (this.beginning < this.end) {
      for (let i = this.beginning; i < this.end; i++) {
        result += this.elements[i];
        result += i < this.end - 1 ? ',' : '';
      }
    }
    result += ']';
    return result;
  }
}

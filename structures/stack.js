export default class Stack {
  constructor(maxSize = 5) {
    this.topIndex = -1;
    this.stack = [];
    this.maxSize = maxSize;
  }
  push(element) {
    if (this.isFull()) {
      throw new Error('Stack Overflow');
    }
    this.stack[++this.topIndex] = element;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack Underflow');
    }
    return this.stack[this.topIndex--];
  }
  top() {
    if (this.isEmpty()) {
      throw new Error('Empty Stack');
    }
    return this.stack[this.topIndex];
  }
  toString() {
    console.log('top: ', this.topIndex);
    let string = '['; 
    for (let i = 0; i <= this.topIndex; i++) {
      string += this.stack[i];
      if (i < this.topIndex) {
        string += ',';
      }
    }
    string += ']'; 
    return string;
  }
  clear() {
    this.topIndex = -1;
  }
  size() {
    return this.topIndex + 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  isFull() {
    return this.size() === this.maxSize;
  }
}

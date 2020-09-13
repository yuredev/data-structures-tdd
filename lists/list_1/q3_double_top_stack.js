export default class DoubleTopStack {
  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this.elements = [];
    this.topIndexB = maxSize;
    this.topIndexA = -1;
  }
  pushA(element) {
    if (this.isFull()) {
      throw new Error('DoubleTopStack Overflow');
    }
    this.elements[++this.topIndexA] = element;
  }
  pushB(element) {
    if (this.isFull()) {
      throw new Error('DoubleTopStack Overflow');
    }
    this.elements[--this.topIndexB] = element;
  }
  popA() {
    if (this.isEmptyA()) {
      throw new Error('DoubleTopStack Underflow');
    }
    return this.elements[this.topIndexA--];
  }
  popB() {
    if (this.isEmptyB()) {
      throw new Error('DoubleTopStack Underflow');
    }
    return this.elements[this.topIndexB++];
  }
  isEmptyA() {
    return this.sizeA() === 0;
  }
  isEmptyB() {
    return this.sizeB() === 0;
  }
  isFull() {
    return this.sizeA() + this.sizeB() === this.maxSize;
  }
  sizeA() {
    return this.topIndexA + 1;
  }
  sizeB() {
    return this.maxSize - this.topIndexB;
  }
  elementsA() {
    let string = '[';
    for (let i = 0; i <= this.topIndexA; i++) {
      string += this.elements[i];
      string += i < this.topIndexA ? ',' : '';
    }
    string += ']';
    return string;
  }
  elementsB() {
    let string = '[';
    for (let i = this.maxSize - 1; i >= this.topIndexB; i--) {
      string += this.elements[i];
      string += i > this.topIndexB ? ',' : '';
    }
    string += ']';
    return string;
  }
}
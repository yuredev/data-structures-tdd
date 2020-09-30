import List from '../structures/list';

export default class DynamicQueue {
  constructor() {
    this.elements = new List();
  }
  enqueue(element) {
    this.elements.append(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow');
    }
    return this.elements.removeFirst();
  }
  front() {
    return this.elements.get(0);
  }
  toString() {
    return this.elements.toString();
  }
  length() {
    return this.elements.length();
  }
  isEmpty() {
    return this.length() === 0;
  }
  clear() {
    this.elements.clear();
  }
}
import List from '../structures/list';

export default class DynamicStack {
  constructor() {
    this.elements = new List();
  }
  push(element) {
    this.elements.append(element);
  }
  pop() {
    return this.elements.removeLast();
  }
  top() {
    if (this.isEmpty()) {
      throw new Error('Empty Stack')
    }
    return this.elements.get(this.elements.length() - 1);
  }
  clear() {
    this.elements.clear();
  }
  size() {
    return this.elements.length();
  }
  toString() {
    return this.elements.toString();
  }
  isEmpty() {
    return this.size() === 0;
  }
}
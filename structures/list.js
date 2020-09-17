class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = new Node();
  }
  add(element) {}
  append(element) {}
  addAt(element, index) {}
  removeFirst() {}
  removeLast() {}
  removeAt(index) {}
  isEmpty() {
    return this.head.next === null;
  }
  search(element) {}
  length() {}
}

export default List;

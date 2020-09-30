class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }
  append(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  addAt(element, position) {
    const newNode = new Node(element);
    const size = this.length();
    if (position >= size) {
      this.append(element);
      return;
    } 
    if (position <= 0) {
      this.add(element);
      return;
    }
    let current;
    if (isSmallerThanHalf(position, size - 1)) {
      current = this.head;
      // head to tail iteration
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      // tail to head iteration
      for (let i = size - 1; i > position; i--) {
        current = current.previous;
      }
    }
    newNode.previous = current.previous;
    current.previous.next = newNode;
    newNode.next = current;
    current.previous = newNode;
  }
  removeAt(position) {
    const size = this.length();
    if (position >= size || position < 0) {
      throw new Error('Invalid Index to Remove');
    } 
    if (position === 0) {
      this.removeFirst();
      return;
    }
    if (position === this.length() - 1) {
      this.removeLast();
      return;
    }
    let current;
    if (isSmallerThanHalf(position, size - 1)) {
      current = this.head;
      // head to tail iteration
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
    } else { 
      current = this.tail;
      // tail to head iteration
      for (let i = size - 1; i > position; i--) {
        current = current.previous;
      }  
    }
    current.previous.next = current.next;
    current.next.previous = current.previous;
  }
  clear() {
    this.head = this.tail = null;
  }
  removeLast() {
    switch (this.length()) {
      case 0:
        return;
      case 1:
        this.clear();
        break;
      default:
        this.tail = this.tail.previous;
        this.tail.next = null;
    }
  }
  removeFirst() {
    switch (this.length()) {
      case 0:
        return;
      case 1:
        this.clear();
        break;
      default:
        this.head = this.head.next;
        this.head.previous = null;
    }
  }
  isEmpty() {
    return this.length() === 0;
  }
  search(element) {
    let current = this.head;
    while (current !== null) {
      if (current.data === element) {
        return true;
      }
      current = current.next;
    }
    return false
  }
  length() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      current = current.next;
      count++;
    }
    return count;
  }
  toString() {
    let result = '[';
    let current = this.head;
    while (current !== null) {
      result += current.next ? `${current.data},` : current.data;
      current = current.next;
    }
    return result + ']';
  }
}

function isSmallerThanHalf(number, total) {
  return number < total / 2;
}

export default DoublyLinkedList;

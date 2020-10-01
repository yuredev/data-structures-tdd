class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = new Node(null);
  }
  add(element) {
    const newNode = new Node(element);
    newNode.next = this.head.next;
    this.head.next = newNode;
  }
  append(element) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(element);
  }
  addAt(element, index) {
    if (index >= this.length()) {
      this.append(element);
      return;
    } else if (index <= 0) {
      this.add(element);
      return;
    }
    const newNode = new Node(element);
    let currentIndex = 1;
    let currentNode = this.head.next;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  getHead() {
    return this.head;
  }
  removeAt(index) {
    if (index >= this.length() || index < 0) {
      throw new Error('Invalid Index to Remove');
    } else if (index === this.length() - 1) {
      return this.removeLast();
    } else if (index === 0) {
      return this.removeFirst();
    } 
    let currentIndex = 1;
    let currentNode = this.head.next;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      console.log(currentIndex);
      currentIndex++;
    }
    const removedElementData = currentNode.next.data;
    currentNode.next = currentNode.next.next;
    return removedElementData;
  }
  get(index) {
    if (this.isEmpty()) {
      throw new Error('There are no elements in the list');
    } 
    if (index >= this.length()) {
      throw new Error('Invalid index to get');
    }
    let current = this.head;
    for (let i = 0; i <= index; i++) {
      current = current.next;
    }
    return current.data;
  }
  search(element) {
    if (this.isEmpty()) {
      return false;
    }
    let currentNode = this.head.next;
    while (currentNode != null) {
      if (currentNode.data === element) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error('List Underflow');
    }
    const removedElement = this.head.next;
    this.head.next = this.head.next.next;
    return removedElement.data;
  }
  removeLast() {
    if (this.isEmpty()) {
      throw new Error('List Underflow');
    }
    let currentNode = this.head.next;
    let removedElementData;
    while (currentNode.next !== null) {
      if (currentNode.next.next === null) {
        removedElementData = currentNode.next.data;
        currentNode.next = null;
        return removedElementData;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.head.next = null;
    return currentNode.data;
  }
  isEmpty() {
    return this.length() === 0;
  }
  length() {
    let count = 0; 
    let currentNode = this.head.next;
    while (currentNode != null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  clear() {
    this.head.next = null;
  }
  toString() {
    let result = '[';
    let currentNode = this.head.next;
    while (currentNode != null) {
      result += currentNode.data;
      currentNode = currentNode.next;
      result += currentNode ? ',' : '';
    }
    result += ']';
    return result;
  }
}

export default List;

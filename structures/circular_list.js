class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularList {
  constructor() {
    this.end = null;
  }
  append(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      newNode.next = newNode;
    } else {
      const last = this.end;
      const first = last.next;
      newNode.next = first;
      last.next = newNode;
    }
    this.end = newNode;
  }
  clear() {
    this.end = null;
  }
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error('List Underflow');
    }
    if (this.end === this.end.next) {
      const removedNode = this.end;
      this.clear();
      return removedNode.value;
    } else {
      const last = this.end;
      const first = last.next;
      const second = first.next;
      last.next = second;
      return first.value;
    }
  }
  isEmpty() {
    return this.end === null;
  }
  toString() {
    if (this.isEmpty()) {
      return '[]';
    } 
    let result = '[';
    const first = this.end.next;
    let current = first;    
    do {
      result += `${current.value}`;
      result += current !== this.end ? ',' : ''; 
      current = current.next;
    } while (current !== first);
    return result + ']';
  }
}

export default CircularList;

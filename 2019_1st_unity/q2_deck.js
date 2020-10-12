import Queue from '../structures/queue';

function transfer(from, to, reduceTo = 0) {
  while (from.length() > reduceTo) {
    to.enqueue(from.dequeue());
  }
}

class Deck {
  constructor(maxSize = 8) {
    this.queue = new Queue(maxSize);
    this.auxQueue = new Queue(maxSize);
  }
  insertBeginning(element) {
    if (this.queue.isFull()) {
      throw new Error('Overflow');
    }
    transfer(this.queue, this.auxQueue);
    this.queue.enqueue(element);
    transfer(this.auxQueue, this.queue);
  }
  insertEnd(element) {
    if (this.queue.isFull()) {
      throw new Error('Overflow');
    }
    this.queue.enqueue(element);
  }
  removeBeginning() {
    if (this.queue.isEmpty()) {
      throw new Error('Underflow');
    }
    const removed = this.queue.dequeue();
    return removed;
  }
  removeEnd() {
    if (this.queue.isEmpty()) {
      throw new Error('Underflow');
    }
    transfer(this.queue, this.auxQueue, 1);
    const removed = this.queue.dequeue();
    transfer(this.auxQueue, this.queue);
    return removed;
  }
}

export default Deck;

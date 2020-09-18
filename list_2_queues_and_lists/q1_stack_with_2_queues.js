import Queue from '../structures/queue';


/** 
 * Transfers the elements from a origin queue to a 
 * destination queue until the origin queue have 1 element
 * @param {Queue} origin The Queue that will be reduced 
 * @param {Queue} destiny The Queue that will 
 * receive the elements of the origin Queue
 */
function transferQueue(origin, destiny) {
  while (origin.length() > 1) {
    destiny.enqueue(origin.dequeue());
  }
}

class StackWith2Queues {
  constructor(maxSize = 8) {
    this.queues = {
      q1: new Queue(maxSize),
      q2: new Queue(maxSize),
      /**
       * @returns {Queue} The bigger Queue
       */
      get bigger() {
        return this.q1.length() > this.q2.length() ? this.q1 : this.q2;
      },
      /**
       * @returns {Queue} The smaller Queue
       */
      get smaller() {
        return this.q1.length() < this.q2.length() ? this.q1 : this.q2;
      }
    };
  }
  push(element) {
    const { bigger } = this.queues;
    if (bigger.isFull()) {
      throw new Error('Stack Overflow');
    }
    bigger.enqueue(element);
  }
  pop() {
    const { bigger, smaller } = this.queues;
    if (bigger.isEmpty()) {
      throw new Error('Stack Underflow');
    }
    transferQueue(bigger, smaller);
    return bigger.dequeue();
  }
  top() {
    const { bigger, smaller } = this.queues;
    if (bigger.isEmpty()) {
      throw new Error('Empty Stack');
    }
    transferQueue(bigger, smaller);
    const result = bigger.front();
    smaller.enqueue(bigger.dequeue());
    return result;
  }
  toString() {
    const { bigger } = this.queues;
    return bigger.toString();
  }
  clear() {
    this.queues.q1.clear();
    this.queues.q2.clear();
  }
  size() {
    return this.queues.bigger.length();
  }
  isEmpty() {
    return this.queues.bigger.isEmpty();
  }
  isFull() {
    return this.queues.bigger.isFull();
  }
}

export default StackWith2Queues;
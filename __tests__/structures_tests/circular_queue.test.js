import CircularQueue from '../../structures/circular_queue';

let queue;

beforeEach(() => queue = new CircularQueue(8));

test('Queue Circularity test', () => {
  const q = new CircularQueue(6);  
  q.enqueue('A');
  expect(q.literalToString()).toBe('[-,A,-,-,-,-,-]');
  q.enqueue('B');
  expect(q.length()).toBe(2);
  q.enqueue('C');
  expect(q.literalToString()).toBe('[-,A,B,C,-,-,-]');
  q.enqueue('D');
  expect(q.literalToString()).toBe('[-,A,B,C,D,-,-]');
});

test('Queue enqueue test', () => {
  queue.enqueue('A');
  expect(queue.toString()).toBe('[A]');
  queue.enqueue('B');
  queue.enqueue('C');
  expect(queue.toString()).toBe('[A,B,C]');
});

test('Queue dequeue test', () => {
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');
  queue.enqueue('D');
  queue.enqueue('E');
  queue.dequeue();
  expect(queue.toString()).toBe('[B,C,D,E]');
  queue.dequeue();
  queue.dequeue();
  expect(queue.toString()).toBe('[D,E]');
  expect(queue.dequeue()).toBe('D');
  expect(queue.toString()).toBe('[E]');
  expect(queue.dequeue()).toBe('E');
});

test('Queue front test', () => {
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');
  queue.enqueue('D');
  expect(queue.front()).toBe('A');
  expect(queue.front()).not.toBe('D');
  queue.dequeue();
  expect(queue.front()).toBe('B');
  queue.dequeue();
  queue.dequeue();
  expect(queue.front()).toBe('D');
});

test('Queue underflow test', () => {
  expect(() => {
    queue.dequeue();
  }).toThrowError('Queue Underflow');
});

test('Queue overflow test', () => {
  const q = new CircularQueue(2);
  q.enqueue('X');
  q.enqueue('X');
  expect(() => {
    q.enqueue('X');
  }).toThrowError('Queue Overflow');
});

test('Queue sizes test', () => {
  expect(queue.isEmpty()).toBe(true);
  expect(queue.length()).toBe(0);
  queue.enqueue('#');
  expect(queue.length()).toBe(1);
  expect(queue.isEmpty()).toBe(false);
  queue.enqueue('#');
  queue.enqueue('#');
  queue.enqueue('#');
  expect(queue.length()).toBe(4);
  queue.enqueue('#');
  queue.enqueue('#');
  queue.enqueue('#');
  expect(queue.length()).toBe(7);
  console.log(queue.literalToString());
  queue.enqueue('#');
  console.log(queue.literalToString());
  expect(queue.length()).toBe(8);
  expect(queue.isFull()).toBe(true);
  queue.dequeue();
  queue.dequeue();
  expect(queue.length()).toBe(6);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  expect(queue.length()).toBe(3);
  queue.clear();
  expect(queue.length()).toBe(0);
  expect(queue.isEmpty()).toBe(true);
});

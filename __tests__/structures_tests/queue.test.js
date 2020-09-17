import Queue from '../../structures/queue';

let queue;

beforeEach(() => queue = new Queue());

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
  const q = new Queue(2);
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
  expect(queue.length()).toBe(5);
  expect(queue.isFull()).toBe(true);
  queue.dequeue();
  expect(queue.length()).toBe(4);
  expect(queue.isFull()).toBe(false);
  queue.dequeue();
  queue.dequeue();
  expect(queue.length()).toBe(2);
  queue.clear();
  expect(queue.toString()).toBe('[]');
  expect(queue.isEmpty()).toBe(true);
  expect(queue.length()).toBe(0);
});

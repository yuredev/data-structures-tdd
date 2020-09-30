import DynamicQueue from '../../list_3_lists/q2_dynamic_queue_with_list';

let queue;

beforeEach(() => queue = new DynamicQueue());

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
  queue.dequeue();
  expect(queue.length()).toBe(4);
  queue.dequeue();
  queue.dequeue();
  expect(queue.length()).toBe(2);
  queue.clear();
  expect(queue.toString()).toBe('[]');
  expect(queue.isEmpty()).toBe(true);
  expect(queue.length()).toBe(0);
});

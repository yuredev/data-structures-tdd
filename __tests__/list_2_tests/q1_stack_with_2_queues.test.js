import Stack from '../../list_2_queues_and_lists/q1_stack_with_2_queues';

let stack;

beforeEach(() => {
  stack = new Stack(5);
});

test('Stack push test', () => {
  stack.push('T');
  stack.push('A');
  stack.push('D');
  stack.push('S');
  expect(stack.toString()).toBe('[T,A,D,S]');
  stack.push('!');
  expect(stack.toString()).toBe('[T,A,D,S,!]');
});

test('Stack pop test', () => {
  stack.push('T');
  stack.push('A');
  stack.push('D');
  stack.push('S');

  expect(stack.toString()).toBe('[T,A,D,S]');

  const stackTop = stack.pop();
  expect(stackTop).not.toBe('A')
  expect(stackTop).toBe('S')
  expect(stack.toString()).toBe('[T,A,D]');
  console.log('antes: ', stack.queues.bigger.toString());
  console.log('depois ', stack.queues.bigger.toString());
  stack.pop();
  expect(stack.toString()).toBe('[T,A]');
  expect(stack.pop()).toBe('A');
  expect(stack.toString()).toBe('[T]');
  expect(stack.pop()).toBe('T');
});

test('Stack sizes test', () => {
  expect(stack.size()).toBe(0);
  expect(stack.isEmpty()).toBe(true);
  stack.push(10);
  expect(stack.size()).toBe(1);
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.size()).toBe(0);
  expect(stack.isEmpty()).toBe(true);
  stack.push(10);
  stack.push(10);
  stack.push(10);
  stack.push(10);
  stack.pop();
  expect(stack.size()).not.toBe(4);
  expect(stack.size()).toBe(3);
  expect(stack.isFull()).toBe(false);
  stack.push(10);
  stack.push(10);
  expect(stack.isFull()).toBe(true);
  stack.pop();
  expect(stack.isFull()).toBe(false);
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
  expect(stack.size()).toBe(0);
  stack.push(10);
  stack.push(10);
  expect(stack.size()).toBe(2);
});

test('Stack top test', () => {
  expect(() => {
    const anyString = stack.top();
  }).toThrowError('Empty Stack');
  stack.push('A');
  expect(stack.top()).toBe('A');
  stack.push('B');
  stack.push('C');
  stack.push('D');
  expect(stack.top()).toBe('D');
  stack.pop();
  expect(stack.top()).toBe('C');
  stack.pop();
  stack.pop();
  expect(stack.top()).toBe('A');
  stack.pop();
  expect(() => {
    const anyString = stack.top();
  }).toThrowError('Empty Stack');
});

test('Stack overflow test', () => {
  stack.push('A');
  stack.push('B');
  stack.push('C');
  stack.push('D');
  stack.push('E');
  expect(() => {
    stack.push('F');
  }).toThrowError('Stack Overflow');
});

test('Stack underflow test', () => {
  expect(() => {
    stack.pop();
  }).toThrowError('Stack Underflow');
});

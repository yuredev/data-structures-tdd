import DynamicStack from '../../list_3_lists/q1_dynamic_stack_with_list';

let stack;

beforeEach(() => {
  stack = new DynamicStack(5);
});

test('Stack push test', () => {
  stack.push('T');
  stack.push('A');
  stack.push('D');
  stack.push('S');
  expect(stack.toString()).toBe('[T,A,D,S]');
  stack.push('UFRN');
  expect(stack.toString()).toBe('[T,A,D,S,UFRN]');
});

test('Stack pop test', () => {
  stack.push('T');
  stack.push('A');
  stack.push('D');
  stack.push('S');
  stack.pop();
  expect(stack.toString()).toBe('[T,A,D]');
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
  stack.push(10);
  stack.push(10);
  stack.pop();
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
  stack.pop();
  expect(stack.top()).toBe('B');
  stack.pop();
  stack.pop();
  expect(() => {
    const anyString = stack.top();
  }).toThrowError('Empty Stack');
});

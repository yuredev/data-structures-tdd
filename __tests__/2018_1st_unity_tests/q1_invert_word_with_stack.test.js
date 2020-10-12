import { Stack, invert } from '../../2018_1st_unity/1_invert_word_with_stack';

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

test('Stack invert test', () => {
  const word = new Stack(80);
  word.push('A');
  word.push('B');
  word.push('A');
  word.push('C');
  word.push('A');
  word.push('X');
  word.push('I');
  expect(invert(word).toString()).toBe(
    '[I,X,A,C,A,B,A]'
  );
});

import Stack from '../../structures/stack';
import reverseExtremities from '../../list_1_stacks/q4_reverse_stack_extremities';

test('Reverse stack extremities test ', () => {
  const stack = new Stack(5);
  stack.push('T');
  stack.push('A');
  stack.push('D');
  stack.push('S');
  expect(reverseExtremities(stack).toString()).toBe(
    '[S,A,D,T]'
  );
  const stack2 = new Stack(6);
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  stack2.push(4);
  stack2.push(5);
  stack2.push(6);
  reverseExtremities(stack2);
  expect(stack2.top()).not.toBe(6);
  expect(stack2.top()).toBe(1);
  expect(stack2.toString()).toBe(
    '[6,2,3,4,5,1]'
  );
});

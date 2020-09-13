import Stack from '../structures/stack';

export default (stack) => {
  const aux = new Stack(stack.maxSize);
  const top = stack.pop();
  while (stack.size() > 1) {
    aux.push(stack.pop());
  }
  const base = stack.pop();
  stack.push(top);
  while (!aux.isEmpty()) {
    stack.push(aux.pop());
  }
  stack.push(base);
  return stack;
};

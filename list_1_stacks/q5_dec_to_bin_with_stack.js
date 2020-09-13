import Stack from '../structures/stack';

export default (decimal) => {
  const stack = new Stack(32);
  let result = '';
  while (decimal > 1) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  stack.push(decimal);
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}
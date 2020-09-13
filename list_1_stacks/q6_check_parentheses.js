import Stack from '../structures/stack';

const isOpening = (char) => char == '[' || char == '(';
const isClosing = (char) => char == ']' || char == ')';

function didTheParenthesesMatch(opening, closing) {
  return opening == '(' && closing == ')' || 
    opening == '[' && closing == ']';
}

function checkParentheses(expression) {
  const stack = new Stack(32);
  for(const char of expression) {
    if (isOpening(char)) {
      stack.push(char);
    } else if (isClosing(char)) {
      if (stack.isEmpty()) {
        return false;
      }
      if (didTheParenthesesMatch(stack.top(), char)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

export default checkParentheses;

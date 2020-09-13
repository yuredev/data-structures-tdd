import checkParentheses from '../../list_1_stacks/q6_check_parentheses';

test('should ', () => {
  expect(checkParentheses('[([][]())]')).toBe(true);
  expect(checkParentheses('[([)][()]')).toBe(false);
  expect(checkParentheses('][()]')).toBe(false);
  expect(checkParentheses('[([(())][])]')).toBe(true);
  expect(checkParentheses('([)]')).toBe(false);
  expect(checkParentheses(')([[[]]])')).toBe(false);
  expect(checkParentheses('[([[[]]])]')).toBe(true);
  expect(checkParentheses(')([])[]')).toBe(false);
})

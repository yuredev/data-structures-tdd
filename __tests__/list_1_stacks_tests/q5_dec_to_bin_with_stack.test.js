import decToBin from '../../list_1_stacks/q5_dec_to_bin_with_stack';

test('Decimal to binary conversion test', () => {
  expect(decToBin(0)).toBe('0');
  expect(decToBin(1)).toBe('1');
  expect(decToBin(2)).toBe('10');
  expect(decToBin(3)).toBe('11');
  expect(decToBin(8)).toBe('1000');
  expect(decToBin(10)).toBe('1010');
  expect(decToBin(100)).toBe('1100100');
  expect(decToBin(255)).toBe('11111111');
  expect(decToBin(544)).toBe('1000100000');
  expect(decToBin(1023)).toBe('1111111111');
});

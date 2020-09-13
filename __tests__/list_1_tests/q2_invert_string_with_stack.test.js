import invertString from '../../list_1/q2_invert_string_with_stack';

test('Invert string test', () => {
  expect(invertString('YURE')).toBe('ERUY');
  expect(invertString('Corinthians')).toBe('snaihtniroC');
  expect(invertString('123456')).toBe('654321');
  expect(invertString('Naruto')).toBe('oturaN');
});

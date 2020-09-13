import Fraction from '../../list_1/q1_fraction';

let fraction;

beforeEach(() => {
  fraction = new Fraction(10, 5);
});

test('Multiplication test', () => {
  expect(fraction.multiply(
    new Fraction(3, 5)
  ).value()).toBe('30/25');
  
  expect(fraction.multiply(
    new Fraction(1, -1)
  ).value()).toBe('10/-5');
  
  expect(fraction.multiply(
    new Fraction(0, 10)
  ).value()).toBe('0/50');
});

test('Division test', () => {
  expect(fraction.divide(
    new Fraction(5, 1)
  ).value()).toBe('10/25');

  expect(fraction.divide(
    new Fraction(10, 2)
  ).value()).toBe('20/50');
});

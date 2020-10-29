import bubbleSort from '../../sort_algorithms/bubble_sort';

test('Bubble sort test', () => {
  const array = [234, 3, 2, -32, 325, 1000, 1, 70];
  expect(bubbleSort(array)).toStrictEqual(
    [-32, 1, 2, 3, 70, 234, 325, 1000]
  );
});

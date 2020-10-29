/**
 * Sort an array
 * @param {number[]} array array to be sorted
 * @returns {number[]} array sorted
 */
export default function bubbleSort(array) {
  const newArray = [ ...array ];
  let isSorted = false;
  let size = array.length;
  let aux;

  do {
    isSorted = true;
    size--;
    for (let i = 0; i < size; i++) {
      if (newArray[i] > newArray[i + 1]) {
        aux = newArray[i + 1];
        newArray[i + 1] = newArray[i];
        newArray[i] = aux;
        isSorted = false;
      }
    }
  } while (!isSorted);
  return newArray;
}
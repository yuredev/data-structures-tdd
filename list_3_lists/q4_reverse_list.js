import List from '../structures/list';

/**
 * Reverse the order of a list
 * @param {List} list The list to be inverted
 * @returns {List} The list inverted
 */
function reverseList(list) {
  const standardList = copyList(list);
  const result = new List();

  while (!standardList.isEmpty()) {
    result.append(standardList.removeLast());
  }
  return result;
}

/**
 * Copy a list
 * @param {List} list The list to be inverted
 */
function copyList(list) {
  const copy = new List();
  for (let i = 0; i < list.length(); i++) {
    copy.append(list.get(i));
  }
  return copy;
}

export default reverseList;

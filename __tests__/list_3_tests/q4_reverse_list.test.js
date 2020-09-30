import reverseList from '../../list_3_lists/q4_reverse_list';
import List from '../../structures/list';

test('ReverseList test', () => {
  const list = new List();
  list.append('T');
  list.append('A');
  list.append('D');
  list.append('S');
  expect(reverseList(list).toString()).toBe(
    '[S,D,A,T]'
  );
  const numbers = new List();
  numbers.add('1');
  numbers.add('2');
  numbers.add('3');
  expect(reverseList(numbers).toString()).toBe(
    '[1,2,3]'
  );
  list.removeLast();
  list.removeLast();
  expect(reverseList(list).toString()).toBe(
    '[A,T]'
  );
  list.removeLast();
  expect(reverseList(list).toString()).toBe(
    list.toString()
  );
});

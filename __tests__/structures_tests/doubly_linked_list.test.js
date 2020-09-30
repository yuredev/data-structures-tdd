import DoublyLinkedList from '../../structures/doubly_linked_list';

test('DoublyLinkedList add test', () => {
  const list = new DoublyLinkedList();
  expect(list.toString()).toBe('[]');
  list.add('A');
  expect(list.toString()).toBe('[A]');
  list.add('B');
  list.add('C');
  expect(list.toString()).toBe('[C,B,A]');
  list.add('D');
  list.add('E');
  list.add('F');
  list.add('G');
  list.add('H');
  expect(list.toString()).toBe('[H,G,F,E,D,C,B,A]');
});

test('DoublyLinkedList append test', () => {
  const list = new DoublyLinkedList();
  expect(list.toString()).toBe('[]');
  list.append(1);
  expect(list.toString()).toBe('[1]');
  list.append(2);
  list.append(3);
  list.append(4);
  expect(list.toString()).toBe('[1,2,3,4]');
});

test('DoublyLinkedList add and append merged test', () => {
  const list = new DoublyLinkedList();
  expect(list.toString()).toBe('[]');
  list.append('A');
  expect(list.toString()).toBe('[A]');
  list.add('B');
  expect(list.toString()).toBe('[B,A]');
  list.add('C');
  list.append('D');
  list.append('E');
  list.add('F');
  expect(list.toString()).toBe('[F,C,B,A,D,E]');
});

test('DoublyLinkedList sizes test', () => {
  const list = new DoublyLinkedList();
  expect(list.isEmpty()).toBe(true);
  expect(list.length()).toBe(0);
  list.add('X');
  expect(list.length()).toBe(1);
  expect(list.isEmpty()).toBe(false);
  list.add('X');
  list.append('X');
  expect(list.length()).toBe(3);
  list.add('X');
  list.append('X');
  list.append('X');
  expect(list.length()).toBe(6);
  list.removeFirst();
  list.removeLast();
  list.removeFirst();
  expect(list.length()).toBe(3);
  list.removeLast();
  list.removeFirst();
  expect(list.length()).toBe(1);
  expect(list.isEmpty()).toBe(false);
  list.removeFirst();
  expect(list.length()).toBe(0);
  expect(list.isEmpty()).toBe(true);
  list.add(23);
  list.removeLast();
  expect(list.length()).toBe(0);
  expect(list.isEmpty()).toBe(true);
  list.add(20);
  list.add(20);
  list.add(20);
  list.add(20);
  list.add(20);
  list.removeAt(0);
  list.removeAt(3);
  list.removeAt(1);
  expect(list.length()).toBe(2);
});

test('DoublyLinkedList removeFirst test', () => {
  const list = new DoublyLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  list.append('E');
  list.removeFirst();
  expect(list.toString()).toBe('[B,C,D,E]');
  list.removeFirst();
  list.removeFirst();
  list.removeFirst();
  expect(list.toString()).toBe('[E]');
  list.removeFirst();
  expect(list.toString()).toBe('[]');
});

test('DoublyLinkedList removeFirst and removeLast merged test', () => {
  const list = new DoublyLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  list.append('E');
  list.append('F');
  list.append('G');
  list.append('H');
  list.add('0');
  list.removeFirst();
  list.removeFirst();
  list.removeLast();
  list.removeLast();
  list.removeLast();
  expect(list.toString()).toBe('[B,C,D,E]');
  list.removeFirst();
  list.removeLast();
  list.removeLast();
  expect(list.toString()).toBe('[C]');
  list.removeFirst();
  expect(list.toString()).toBe('[]');
});

test('DoublyLinkedList removeLast test', () => {
  const list = new DoublyLinkedList();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('D');
  list.append('E');
  list.removeLast();
  expect(list.toString()).toBe('[A,B,C,D]');
  list.removeLast();
  list.removeLast();
  list.removeLast();
  expect(list.toString()).toBe('[A]');
  list.removeLast();
  expect(list.toString()).toBe('[]');
});

test('DoublyLinkedList removeAt test', () => {
  const list = new DoublyLinkedList();
  list.append('A'); 
  list.append('B');
  list.append('C');
  list.append('D');
  list.append('E');
  list.append('F');
  list.append('G');
  list.append('H');
  list.removeAt(3);
  expect(list.toString()).toBe(
    '[A,B,C,E,F,G,H]'
  );
  list.removeAt(0);
  expect(list.toString()).toBe(
    '[B,C,E,F,G,H]'
  );
  list.removeAt(0);
  list.removeAt(2);
  expect(list.toString()).toBe(
    '[C,E,G,H]'
  );
  list.removeAt(3);
  expect(list.toString()).toBe(
    '[C,E,G]'
  );
  list.removeAt(2);
  list.removeAt(0);
  expect(list.toString()).toBe(
    '[E]'
  );
  list.removeAt(0);
  expect(list.toString()).toBe(
    '[]'
  );
})

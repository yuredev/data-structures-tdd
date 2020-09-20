import List from '../../structures/list';

let list;

beforeEach(() => {
  list = new List();
});

test('List append test', () => {
  list.append('a');
  expect(list.toString()).toBe('[a]');
  list.append('b');
  list.append('c');
  expect(list.toString()).toBe('[a,b,c]');
  expect(list.toString()).not.toBe('[c,b,a]');
  list.append('d');
  expect(list.toString()).toBe('[a,b,c,d]');
});

test('List add test', () => {
  list.add('a');
  expect(list.toString()).toBe('[a]');
  list.add('b');
  list.add('c');
  expect(list.toString()).toBe('[c,b,a]');
  expect(list.toString()).not.toBe('[a,b,c]');
  list.add('d');
  expect(list.toString()).toBe('[d,c,b,a]');
});

test('List remove last test', () => {
  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.removeLast();
  expect(list.toString()).toBe('[a,b,c]');
  expect(list.removeLast()).toBe('c');
  list.removeLast();
  expect(list.toString()).toBe('[a]');
  expect(list.removeLast()).toBe('a');
})

test('List remove first test', () => {
  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.removeFirst();
  expect(list.toString()).toBe('[b,c,d]');
  expect(list.removeFirst()).toBe('b');
  list.removeFirst();
  expect(list.toString()).toBe('[d]');
  expect(list.removeFirst()).toBe('d');
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  list.removeFirst();
  list.removeFirst();
  list.removeFirst();
  expect(list.toString()).toBe('[4,5]');
});



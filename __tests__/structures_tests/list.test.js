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

test('List addAt test', () => {
  list.append('a');
  list.append('c');
  list.append('d');
  list.append('e');
  list.addAt('b', 1);
  expect(list.toString()).toBe('[a,b,c,d,e]');
  list.addAt('0', 0);
  expect(list.toString()).toBe('[0,a,b,c,d,e]');
  list.addAt('y', -10);
  list.addAt('z', -6);
  expect(list.toString()).toBe('[z,y,0,a,b,c,d,e]');
  list.addAt('#', 6);
  expect(list.toString()).toBe('[z,y,0,a,b,c,#,d,e]');
  list.addAt('*', 7);
  expect(list.toString()).toBe('[z,y,0,a,b,c,#,*,d,e]');
  list.addAt('&', 5);
  expect(list.toString()).toBe('[z,y,0,a,b,&,c,#,*,d,e]');
  list.addAt('%', 500);
  expect(list.toString()).toBe('[z,y,0,a,b,&,c,#,*,d,e,%]');
});

test('List removeLast test', () => {
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

test('List removeFirst test', () => {
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

test('List removeAt test', () => {
  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.append('e');
  expect(list.removeAt(1)).toBe('b');
  expect(list.toString()).toBe('[a,c,d,e]');
  expect(list.removeAt(0)).toBe('a');
  expect(list.toString()).toBe('[c,d,e]');
  expect(list.removeAt(2)).toBe('e');
  expect(list.toString()).toBe('[c,d]');
  list.clear();
  list.append('$');
  list.append('%');
  list.append('^');
  list.append('|');
  list.append('@');
  list.removeAt(3);
  list.removeAt(3);
  expect(list.toString()).toBe('[$,%,^]');
  list.removeAt(0);
  list.removeAt(1);
  expect(list.toString()).toBe('[%]');
  expect(() => {
    list.removeAt(3);
  }).toThrowError('Invalid Index to Remove');
  expect(() => {
    list.removeAt(-1);
  }).toThrowError('Invalid Index to Remove');
});

test('List sizes test', () => {
  expect(list.isEmpty()).toBe(true);
  list.append('x');
  list.removeLast();
  expect(list.length()).toBe(0);  
  list.append('x');
  expect(list.isEmpty()).toBe(false);
  expect(list.length()).toBe(1);
  list.append('x');
  list.append('x');
  list.add('x');
  expect(list.length()).toBe(4);
  list.removeFirst();
  list.removeFirst();
  list.removeLast();
  expect(list.length()).toBe(1);
  list.removeLast();
  expect(list.length()).toBe(0);  
  expect(list.isEmpty()).toBe(true);
  list.append('x');
  list.add('x');
  list.add('x');
  expect(list.length()).toBe(3);  
  list.clear();
  expect(list.length()).toBe(0);  
  expect(list.isEmpty()).toBe(true);
  list.add('a');
  list.append('a');
  list.append('a');
  list.append('a');
  list.addAt('a', 1);
  list.addAt('a', 3);
  expect(list.length()).toBe(6);  
});

test('List search test', () => {
  expect(list.search(20)).toBe(false);
  list.add(20);
  expect(list.search(20)).toBe(true);
  const worldChampions = new List();
  worldChampions.append('Corinthians');
  worldChampions.append('Barcelona');
  worldChampions.append('Liverpool');
  worldChampions.append('Real Madrid');
  expect(worldChampions.search('Palmeiras')).toBe(false);
  expect(worldChampions.search('Chelsea')).toBe(false);
  expect(worldChampions.search('Corinthians')).toBe(true);
  expect(worldChampions.search('Barcelona')).toBe(true);
});

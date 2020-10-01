import SubstringList from '../../list_3_lists/q6_substring_list';

test('Substring test', () => {
  const list = new SubstringList();
  list.append('C');
  list.append('o');
  list.append('r');
  list.append('i');
  list.append('n');
  list.append('t');
  list.append('h');
  list.append('i');
  list.append('a');
  list.append('n');
  list.append('s');
  expect(list.substring(2, 7).toString()).toBe(
    '[r,i,n,t,h,i]'
  );
  expect(list.substring(0, 3).toString()).toBe(
    '[C,o,r,i]'
  );
  expect(list.substring(0, 9).toString()).toBe(
    '[C,o,r,i,n,t,h,i,a,n]'
  );
  expect(list.substring(0, 10).toString()).toBe(
    '[C,o,r,i,n,t,h,i,a,n,s]'
  );
  expect(list.substring(8, 10).toString()).toBe(
    '[a,n,s]'
  );
  expect(() => {
    list.substring(8, 14);
  }).toThrowError('Invalid positions');
  expect(() => {
    list.substring(-1, 4);
  }).toThrowError('Invalid positions');
});

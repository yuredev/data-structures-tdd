import DoubleTopStack from '../../list_1/q3_double_top_stack';

let doubleTopStack;

beforeEach(() => {
  doubleTopStack = new DoubleTopStack(6);
});

test('DoubleTopStack push test', () => {
  doubleTopStack.pushA('A');
  expect(doubleTopStack.elementsA()).toBe(
    '[A]'
  );
  doubleTopStack.pushA('B');
  doubleTopStack.pushA('C');
  expect(doubleTopStack.elementsA()).toBe(
    '[A,B,C]'
  );
  doubleTopStack.pushB('1');
  doubleTopStack.pushB('2');
  expect(doubleTopStack.elementsB()).toBe(
    '[1,2]'
  );
});

test('DoubleTopStack pop test', () => {
  doubleTopStack.pushA('1');
  doubleTopStack.pushA('2');
  doubleTopStack.pushA('3');
  doubleTopStack.pushA('4');
  doubleTopStack.pushA('5');
  expect(doubleTopStack.popA()).toBe('5');
  doubleTopStack.popA();
  expect(doubleTopStack.elementsA()).toBe(
    '[1,2,3]'
  );
  doubleTopStack.popA();
  expect(doubleTopStack.elementsA()).toBe(
    '[1,2]'
  );
  doubleTopStack.pushB('A');
  doubleTopStack.pushB('B');
  doubleTopStack.pushB('C');
  expect(doubleTopStack.popB()).toBe('C');
  expect(doubleTopStack.elementsB()).toBe(
    '[A,B]'
  );
  doubleTopStack.popB();
  expect(doubleTopStack.elementsB()).toBe(
    '[A]'
  );
});


test('DoubleTopStack overflow test', () => {
  doubleTopStack.pushA('*');
  doubleTopStack.pushA('*');
  doubleTopStack.pushA('*');
  doubleTopStack.pushA('*');
  
  doubleTopStack.pushB('#');
  doubleTopStack.pushB('#');

  expect(doubleTopStack.isFull()).toBe(true);

  expect(() => {
    doubleTopStack.pushA('*');
  }).toThrowError('DoubleTopStack Overflow');

  expect(() => {
    doubleTopStack.pushB('#');
  }).toThrowError('DoubleTopStack Overflow');
});

test('DoubleTopStack sizes test', () => {
  expect(doubleTopStack.sizeA()).toBe(0);
  expect(doubleTopStack.isEmptyA()).toBe(true);
  doubleTopStack.pushA('Y');
  expect(doubleTopStack.sizeA()).toBe(1);
  expect(doubleTopStack.isEmptyA()).toBe(false);
  doubleTopStack.pushA('Y');
  doubleTopStack.pushA('Y');
  expect(doubleTopStack.sizeA()).toBe(3);

  expect(doubleTopStack.isFull()).toBe(false);

  expect(doubleTopStack.sizeB()).toBe(0);
  expect(doubleTopStack.isEmptyB()).toBe(true);
  doubleTopStack.pushB('M');
  expect(doubleTopStack.sizeA()).not.toBe(4);
  expect(doubleTopStack.sizeB()).toBe(1);
  expect(doubleTopStack.isEmptyB()).toBe(false);
  doubleTopStack.pushB('M');
  doubleTopStack.pushB('M');
  expect(doubleTopStack.sizeB()).toBe(3); 

  expect(doubleTopStack.isFull()).toBe(true);

  doubleTopStack.popA();
  doubleTopStack.popA();
  expect(doubleTopStack.sizeA()).toBe(1);
  doubleTopStack.popA();
  expect(doubleTopStack.sizeA()).toBe(0);
  expect(doubleTopStack.isEmptyA()).toBe(true);

  doubleTopStack.popB();
  doubleTopStack.popB();
  expect(doubleTopStack.sizeB()).toBe(1); 
  expect(doubleTopStack.isEmptyB()).toBe(false);

  expect(doubleTopStack.isFull()).toBe(false);

  doubleTopStack.pushB('M');
  doubleTopStack.pushB('M');
  expect(doubleTopStack.sizeB()).toBe(3);
  doubleTopStack.pushB('M');
  doubleTopStack.pushB('M');
  doubleTopStack.pushB('M');
  
  expect(doubleTopStack.sizeA()).toBe(0); 
  expect(doubleTopStack.isFull()).toBe(true);
});
import Deck from '../../list_2_queues/q5_deck';

let deck;

beforeEach(() => (deck = new Deck(6)));

test('inserir no início e remover do inicio', () => {
  deck.insertBeginning(4);
  deck.insertBeginning(2);
  deck.insertBeginning(12);
  deck.insertBeginning(45);
  expect(deck.removeBeginning()).toBe(45);
  expect(deck.removeBeginning()).toBe(12);
  expect(deck.removeBeginning()).toBe(2);
  expect(deck.removeBeginning()).toBe(4);
});

test('inserir no fim e remover do fim', () => {
  deck.insertEnd(10);
  deck.insertEnd(4);
  deck.insertEnd(3);
  deck.insertEnd(20);
  expect(deck.removeEnd()).toBe(20);
  expect(deck.removeEnd()).toBe(3);
  expect(deck.removeEnd()).toBe(4);
  expect(deck.removeEnd()).toBe(10);
});

test('teste de overflow', () => {
  deck.insertEnd(3);
  deck.insertEnd(3);
  deck.insertEnd(3);
  deck.insertEnd(3);
  deck.insertEnd(3);
  deck.insertEnd(3);
  expect(() => deck.insertEnd(3)).toThrowError('Overflow');
  const d2 = new Deck(3);
  d2.insertBeginning(3);
  d2.insertBeginning(3);
  d2.insertBeginning(3);
  expect(() => d2.insertBeginning(3)).toThrowError('Overflow');
});

test('teste de underflow', () => {
  expect(() => deck.removeEnd()).toThrowError('Underflow');
  expect(() => deck.removeBeginning()).toThrowError('Underflow');
});
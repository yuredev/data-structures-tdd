// QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI deve ser impresso IXACABA.
// Utilizando as variáveis declaradas abaixo como variáveis globais,
// #DEFINE TAM 10
// char pilha[TAM];
// int topo;
// char palavra[TAM];
// Faça o que se pede:
// i) Desenvolva a função push que inclui um elemento na pilha. (valor 0,75)
// ii) Desenvolva a função pop que retira um elemento da pilha. (valor 0,75)
// iii) Desenvolva a função inverte que leia a palavra da entrada padrão (scanf) e, utilizando as funções push e pop da pilha, imprima a palavra de forma invertida (valor 1,0)
// Dica: utilize as seguintes assinaturas de funções:
// void push(char dado);
// char pop ();
// void inverte ();

class Stack {
  constructor(maxSize = 5) {
    this.topIndex = -1;
    this.stack = [];
    this.maxSize = maxSize;
  }
  push(element) {
    if (this.isFull()) {
      throw new Error('Stack Overflow');
    }
    this.stack[++this.topIndex] = element;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack Underflow');
    }
    return this.stack[this.topIndex--];
  }
  size() {
    return this.topIndex + 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  isFull() {
    return this.size() === this.maxSize;
  }
  toString() {
    let string = '[';
    for (let i = 0; i <= this.topIndex; i++) {
      string += this.stack[i];
      if (i < this.topIndex) {
        string += ',';
      }
    }
    string += ']';
    return string;
  }
}

/**
 * Invert a word
 * @param {Stack} word
 */
function invert(word) {
  console.log('maxSize: ', word.maxSize);
  const invertedWord = new Stack(word.maxSize);
  while (!word.isEmpty()) {
    invertedWord.push(word.pop());
  }
  return invertedWord;
}

export { Stack, invert };
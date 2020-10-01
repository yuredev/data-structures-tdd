import List from '../structures/list';

class SubstringList extends List {
  constructor() {
    super();
  }
  validateSubstring(a, b) {
    const isGreaterThanLenght = a > super.length() || b > super.length();
    const isNegative = a < 0 || b < 0;
    return !isGreaterThanLenght && !isNegative; 
  }
  substring(a, b) {
    if (!this.validateSubstring(a, b)) {
      throw new Error('Invalid positions');
    }
    const substringList = new List();
    let count = 0;
    let current = super.getHead().next;
    console.log(super.head);
    while (count < a) {
      current = current.next;
      count++;
    }
    for (let i = a; i <= b; i++) {
      substringList.append(current.data);
      current = current.next;
    }
    return substringList;
  } 
}

export default SubstringList;

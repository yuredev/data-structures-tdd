export default class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  value() {
    return `${this.numerator}/${this.denominator}`;
  }
  multiply({ numerator, denominator }) {
    const newFraction = new Fraction(numerator, denominator);
    newFraction.numerator *= this.numerator;
    newFraction.denominator *= this.denominator;
    return newFraction;
  }
  divide({ numerator, denominator }) {
    return this.multiply({
      numerator: denominator,
      denominator: numerator,
    });
  }
}
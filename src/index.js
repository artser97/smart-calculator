class SmartCalculator {
  constructor(initialValue) {
    this.number = eval(initialValue);
  }
  toString(){
    return eval(this.number);
  }

  add(number) {
    this.number += "+" + number;
    return this;
    
  }

  subtract(number) {
    this.number += "-" + number;
    return this;
    
  }

  multiply(number) {
    this.number+= "*" + number;
    return this;
    
  }

  devide(number) {
    this.number += "/" + number;
    return this;
    
  }

  pow(number) {
    this.number += "**" + number;
    return this;
    
  }
}

this.number = eval(this.number);

module.exports = SmartCalculator;

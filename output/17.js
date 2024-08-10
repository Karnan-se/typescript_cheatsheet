"use strict";
class mathsOperation {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    addition() {
        return this.num1 + this.num2;
    }
    multiplication() {
        return this.num1 * this.num2;
    }
    substraction() {
        return this.num1 - this.num2;
    }
    division() {
        return this.num1 / this.num2;
    }
}
let operations = new mathsOperation(10, 5);
console.log(operations.addition());
console.log(operations.multiplication());

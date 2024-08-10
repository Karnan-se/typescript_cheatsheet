"use strict";
// HERE INTERFACE PROVIDE ONLY STRUCTURE
class Arraymethod {
    constructor(array) {
        this.array = array;
    }
    displayArray() {
        console.log(this.array);
    }
}
let array = new Arraymethod([1, 2, 3, 4, 5,]);
array.displayArray();

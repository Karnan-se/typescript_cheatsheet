"use strict";
const value = 5;
let graph = [66, 22];
let [x, y] = graph;
console.log(x);
function createfn(num1, word) {
    return [num1, word];
}
console.log(createfn(5, "hello"));
class namedValue {
    constructor(name) {
        this.name = name;
    }
    display() {
        return this.name;
    }
}
let namedf = new namedValue("karnan");
let named1 = new namedValue(6);
console.log(namedf.display());
console.log(named1.display());

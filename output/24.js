"use strict";
class Area {
    constructor() { }
    circle(radius) {
        return 3.14 * (radius * radius);
    }
    Square(side) {
        return side * side;
    }
    rectangle(length, bredth) {
        return 2 * (length * bredth);
    }
    triangel(breadth, height) {
        return 0.5 * (breadth * height);
    }
}
class MyClass extends Area {
    circle(radius) {
        return 3.14 * (radius * radius);
    }
    rectangle(length, bredth) {
        return 2 * (length * bredth);
    }
    triangel(breadth, height) {
        return 0.5 * (breadth * height);
    }
}
let newClass = new MyClass();
console.log(newClass.circle(5));
console.log(newClass.rectangle(2, 4));

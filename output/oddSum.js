"use strict";
// Write a program to find the sum of all the odd numbers for a given limit
let arr = [];
function oddSum(limit) {
    for (let i = 1; i < limit; i++) {
        if (i % 2) {
            arr.push(i);
        }
    }
    const sum = arr.reduce((acc, num) => {
        return acc + num;
    });
    return sum;
}
const result = oddSum(10);
console.log(result);

"use strict";
// 10. Write a program to interchange the values of two arrays.
let array1 = [10, 20, 30, 40, 50];
let array2 = [15, 25, 35, 45, 55];
[array1, array2] = [array2, array1];
console.log("array1", array1);
console.log("array2", array2);

"use strict";
// 14. Write a program to add to two dimensional arrays
function sumof2dArray(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        const row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(row);
    }
    return result;
}
const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arr2 = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
console.log(sumof2dArray(arr2, arr1));

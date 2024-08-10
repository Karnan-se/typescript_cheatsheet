"use strict";
// 9. Write a program to print the following pattern (hint: use nested loop)
for (let i = 1; i <= 5; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row.trim());
}

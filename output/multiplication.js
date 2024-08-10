"use strict";
function multiple(num) {
    for (let i = 1; i <= 10; i++) {
        let result = i * num;
        console.log(i, "X", num, "=", result);
    }
}
multiple(7);

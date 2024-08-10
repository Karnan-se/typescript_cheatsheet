"use strict";
// 16
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return 'Entered number is Prime number';
}
console.log(isPrime(8));
console.log(isPrime(7));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkGrade(marks) {
    switch (true) {
        case marks > 90: return "A";
        case marks > 80: return "B";
        case marks > 70: return "C";
        case marks > 60: return "D";
        default: return "f";
    }
}
console.log(checkGrade(85));
console.log(checkGrade(49));

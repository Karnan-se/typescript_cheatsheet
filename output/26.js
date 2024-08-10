"use strict";
function reverseString(str) {
    try {
        let reversedString = str.split("").reverse().join("");
        console.log(reversedString);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log(typeof str);
    }
}
reverseString("karnan");

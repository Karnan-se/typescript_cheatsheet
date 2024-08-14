"use strict";
var userDetails = {
    age: 25
};
const userDetail = {
    name: "karnan",
    age: 25,
    batch: 145,
};
const adminDetails = {
    age: 28,
    batch: 141,
    color: "red",
    name: "karnan"
};
function printetails(adminDetails) {
    adminDetails.age = 23;
}
console.log(printetails(adminDetails));

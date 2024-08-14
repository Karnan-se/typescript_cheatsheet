"use strict";
let person = {
    name: "karnan",
    age: 26,
    bathc: 151
};
function createPerson(details, value) {
    console.log(details.name);
    console.log(details.age);
    console.log(value);
}
createPerson(person, "hello");

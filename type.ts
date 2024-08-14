type personalData  = {
    name: string,
    age:number,
    bathc:number
}
let person :personalData= {
    name:"karnan",
    age:26,
    bathc:151
}


function createPerson<t>(details:personalData, value:t){
    console.log(details.name);
    console.log(details.age);
    console.log(value)
}



createPerson<string>(person, "hello")

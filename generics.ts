// partials

interface points {
    name:string,
    age:number,
    batch:any
}

let personalDetail :points ={
    name:"karnan",
    age:25,
    batch:151
}
personalDetail.batch = Math.floor(personalDetail.batch)

let personalDetai : Partial<points> = {
    name:"karnana"
}
let perosonalDeta :Record<string, number> = {
    "karnan" : 24,
}
console.log(perosonalDeta["karnan"])

var personalDetails :Omit<points, "name"| "age"> = {
    batch:24
}

var personalDetals : Pick<points,  "name" |"age"> ={
    name:"karnan",
    age:25
}
var newDetails: Readonly<points>= {
    name:"karnan",
    age:34,
    batch:142,
    
}





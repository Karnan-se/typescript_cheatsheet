interface  Details {
    name:string;
    age:number;
    batch:number;
    getName?:()=>number;
}

var userDetails :Partial<Details> ={
    age:25 
}
const userDetail :Details = {
     name:"karnan",
     age:25,
     batch:145,

}



interface NewDetails  extends Details {
    color:string
}
const adminDetails : NewDetails ={
    age:28,
    batch:141,
    color:"red",
    name:"karnan"
}


function printetails(adminDetails:NewDetails){
    adminDetails.age =23
}
console.log(printetails(adminDetails))


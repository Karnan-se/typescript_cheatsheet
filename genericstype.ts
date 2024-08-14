type  primitive = string|number|boolean;


const value : Exclude<primitive, string> = 5;

let graph :[number, number] = [66, 22 ]

let[x, y] = graph;
console.log(x)


function createfn<n,t>(num1:n, word:t):[n,t]{
    return [num1, word]
}
console.log(createfn<number, string>(5, "hello"))


class  namedValue<T>{

    public name :T 

    constructor(name:any){
        this.name = name;
    }

    public display():T{

        return this.name
    }

}

let namedf = new namedValue<string>("karnan");
let named1 = new namedValue<number>(6);

console.log(namedf.display())
console.log(named1.display())



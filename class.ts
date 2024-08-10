// HERE INTERFACE PROVIDE ONLY STRUCTURE

class Arraymethod {
    private array :number[]

    constructor(array:number[]){
        this.array = array
          
    }
    displayArray(){
        console.log(this.array)
    }
    
}
let array = new Arraymethod([1,2,3,4,5,]);
array.displayArray()
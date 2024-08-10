interface operations {
    addition:()=>number;
    multiplication:()=>number;
    substraction:()=>number;
    division:()=>number; 
}

class mathsOperation implements operations{
    public num1:number;
    public num2:number;

    constructor(num1:number, num2:number){
        this.num1= num1;
        this.num2=num2;
    }
    addition(){
        return  this.num1+this.num2;
    }
    multiplication(){
        return  this.num1*this.num2;
    }
    substraction(){
        return  this.num1-this.num2;
    }
    division(){
        return  this.num1/this.num2;
    }

}
let operations = new mathsOperation(10,5);
console.log(operations.addition())
console.log(operations.multiplication())

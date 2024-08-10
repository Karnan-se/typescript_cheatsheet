
class Area{
    constructor(){}

    protected circle(radius:number):number{
        return 3.14*(radius* radius)  
    }
    Square(side:number):number{
        return side* side
    }
    rectangle(length:number, bredth:number){
        return 2*(length* bredth)
    }
    triangel(breadth:number, height:number){
        return 0.5*(breadth* height)
    }
}

class MyClass extends Area {

    circle(radius: number): number {
        return 3.14*(radius* radius)    
    }
    rectangle(length: number, bredth: number): number {
        return 2*(length* bredth)
    }
    triangel(breadth: number, height: number): number {
        return 0.5*(breadth* height)
        
    }
}

let newClass = new  MyClass()
console.log(newClass.circle(5));
console.log(newClass.rectangle(2, 4))

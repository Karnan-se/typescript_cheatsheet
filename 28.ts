// 28. Create a constructor function that satisfies the following conditions:
// The name of the constructor function should be Car.
// It should take three parameters: name, mileage and max_speed.
// Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.

class Vehicle {
    car_name:string;
    mileage:number;
    max_speed:number
    constructor (car_name:string, mileage:number, max_speed:number ){
        this.car_name =car_name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }

    displayInfo(){
        console.log(`Car Name: ${this.car_name}`);
        console.log(`Mileage: ${this.mileage} km/l`);
        console.log(`Max Speed: ${this.max_speed} km/h`);

    }
}

const myCar = new Vehicle("Toyota", 15, 180);
myCar.displayInfo();

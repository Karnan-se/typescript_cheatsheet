
import { DefaultDeserializer } from "v8"

function checkGrade(marks:number):string {
    switch(true){
        case marks>90 :return "A"
        case marks>80 :return "B"
        case marks>70 :return "C"
        case marks>60 :return "D";
        default: return "f"
    }
}

console.log(checkGrade(85))
console.log(checkGrade(49))

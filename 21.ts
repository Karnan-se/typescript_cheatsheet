// 21. Write a program to multiply the adjacent values of an array and store it in an another array

function multipli(arr:number):number[]{
    let newArr =[];
    for(let i=1; i<arr; i++){

        newArr.push(i*(i+1))
    }
    return newArr
}
console.log(multipli(6))
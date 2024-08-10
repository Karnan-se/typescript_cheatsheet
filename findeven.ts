// 11. Write a program to find the number of even numbers in an array

function findEven(arr:number[]):number[]{

    const EvenNumber = arr.filter((num=> num%2==0));
    return EvenNumber;
}
console.log(findEven([1,3,4,5,1,4,12,40]))


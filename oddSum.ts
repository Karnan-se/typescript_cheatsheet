// Write a program to find the sum of all the odd numbers for a given limit

let arr:(number)[] =[]
function oddSum(limit:number):number {
    for(let i=1; i<limit; i++){
        if(i%2){
            arr.push(i)
        }

    }
   const sum:number = arr.reduce((acc, num)=>{
    return acc+num;
   })
   return sum
}
const result = oddSum(10);
console.log(result);


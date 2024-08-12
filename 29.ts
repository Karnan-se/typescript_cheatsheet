


type callback = (arr:number[])=>boolean

function MyFilter(arr:number[], callback:callback):boolean{

    console.log(arr);

    return callback(arr)

}

function isSumOdd(arr:number[]):boolean{

    let sum = arr.reduce((acc, num)=> {
        return acc+num;
    }, 0)
    return sum % 2 === 1; 
   
}
let arr6 =[1,2,3,4,5,6];

console.log(MyFilter(arr6, isSumOdd));
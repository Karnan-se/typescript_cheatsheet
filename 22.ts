// 22. Write a program to add the values of two 2D arrays

class Arraymethods{
    array1:number[][]=[];
    array2:number[][]=[];
    resultArray: number[][] =[]

    constructor(){}
    getArray(arr:number[][], arr2:number[][]){
        this.array1=arr;
        this.array2=arr2;
    }
    addArray(){
        if (this.array1.length === this.array2.length && this.array1[0].length === this.array2[0].length) {

            for(let i=0; i<this.array1.length; i++){
                let row: number[] = [];
            for(let j=0; j>this.array1[i].length; j++){
                row.push(this.array1[i][j] + this.array2[i][j])
            }
            this.resultArray.push(row)
            }
        }else {
            console.log("this arrays have differenet dimensions")
        }
    }
    displayArray() {
        console.log("Resultant Array:");
        for (let i = 0; i < this.resultArray.length; i++) {
            console.log(this.resultArray[i].join("\t"));
        }
    }
}
let arr3 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
let arr4 = [[9, 8, 7],[6, 5, 4],[3, 2, 1]];
let arrayMethods = new Arraymethods();
arrayMethods.getArray(arr3, arr4);
arrayMethods.addArray();
arrayMethods.displayArray();
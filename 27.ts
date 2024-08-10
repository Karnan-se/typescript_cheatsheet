// 27. Given a variable named my_height, you must throw errors under the following 

function checkheight(height:number){
   try{
    if(isNaN(height)){
        throw new Error ('notANumberError')
    }
    if(height<5){
        throw new Error ('TinyHeight Error')
    }
    if(height>100){
        throw new Error ('HugeHeight Error')
    }
    return "height is with in normal Range"

   }catch(error){
    if(error instanceof Error){
        return error.message
    }
   }

}
console.log(checkheight(2))
console.log(checkheight(10))
console.log(checkheight(101))